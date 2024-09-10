import * as child_process from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import semver from 'semver';
import openapiTS, {
  astToString,
  type Method,
  type OpenAPI3,
} from 'openapi-typescript';

const REPO_URL = 'https://github.com/safe-global/safe-client-gateway.git';

const PROD_SWAGGER_URL = 'https://safe-client.safe.global/api';
const STAGING_SWAGGER_URL = 'https://safe-client.staging.5afe.dev/api';

const BARREL_FILE_NAME = 'index';
const CLIENT_FILE_NAME = 'client';
const SCHEMA_FILE_NAME = 'schema';
const SDK_FILE_NAME = 'sdk';

const DIST_FOLDER_NAME = 'dist';
const SRC_FOLDER_NAME = 'src';

const PACKAGE_JSON_FILE = path.join(process.cwd(), 'package.json');
const SRC_FOLDER = path.join(process.cwd(), SRC_FOLDER_NAME);

const WARNING = `/**
 * This file was auto-generated. Do not make direct changes.
 */`;

async function main(): Promise<void> {
  try {
    updatePackageJson();
    await generateSdk();
    buildSdk();
    process.exit();
  } catch (error) {
    fs.rmSync(SRC_FOLDER, { recursive: true });

    throw error;
  }
}
void main();

/**
 * Updates SDK version in package.json if necessary
 */
function updatePackageJson(): void {
  const packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_FILE, 'utf-8'));
  const sdkVersion = calculateVersion();

  if (packageJson.version === sdkVersion) {
    console.log('SDK version is up-to-date');
    process.exit();
  }

  packageJson.version = sdkVersion;
  fs.writeFileSync(PACKAGE_JSON_FILE, JSON.stringify(packageJson, null, 2));
}

/**
 * Calculates SDK version based on latest tag and commit hash
 * of the Safe Client Gateway repository:
 *
 * - If latest commit hash matches latest tag commit hash,
 *   version is latest tag version
 * - Otherwise, version is latest tag version appended
 *   with '-next-' and first 7 characters of latest commit hash
 *
 *  @returns SDK version string
 */
function calculateVersion(): string {
  const latestCommitHash = getCommitHash('HEAD');

  // Get semantically sorted tags, e.g. ['v1.0.0', 'v1.0.1', 'v1.1.0']
  const tagNames = getSortedTagNames();

  const latestTagName = tagNames[tagNames.length - 1];
  const latestTagCommitHash = getCommitHash(`refs/tags/${latestTagName}`);

  // Get prefix-stripped tag version, e.g. '1.0.0'
  const tagVersion = semver.clean(latestTagName)?.toString();
  if (!tagVersion) {
    throw new Error(`Invalid tag version: ${latestTagName}`);
  }

  return latestCommitHash === latestTagCommitHash
    ? tagVersion
    : `${tagVersion}-next-${latestCommitHash.substring(0, 7)}`;
}

/**
 * Gets semantically sorted tag names from Safe Client Gateway repo
 * @returns semantically sorted tag names, e.g. ['v1.0.0', 'v1.0.1', 'v1.1.0']
 */
function getSortedTagNames(): string[] {
  return child_process
    .execSync(`git ls-remote --tags ${REPO_URL}`)
    .toString()
    .split('\n')
    .map((line) => line.match(/refs\/tags\/(.+)$/)?.[1] || null)
    .filter((tagName): tagName is string => !!semver.valid(tagName))
    .sort(semver.compare);
}

/**
 * Gets commit hash of reference in Safe Client Gateway repository
 * @param ref - Reference to get commit hash of
 * @returns Commit hash of reference
 */
function getCommitHash(ref: string): string {
  return child_process
    .execSync(`git ls-remote ${REPO_URL} ${ref}`)
    .toString()
    .split('\t')[0];
}

/**
 * Generates SDK for Safe Client Gateway
 */
async function generateSdk(): Promise<void> {
  fs.mkdirSync(SRC_FOLDER, { recursive: true });

  const definitions = await getSwaggerDefinitions();
  const schema = await getSchema(definitions);

  const client = getClient();
  const wrappers = getWrappers(definitions);

  const barrel = getBarrel();

  [
    [CLIENT_FILE_NAME, client],
    [SCHEMA_FILE_NAME, schema],
    [SDK_FILE_NAME, wrappers],
    [BARREL_FILE_NAME, barrel],
  ].forEach(([file, content]) => {
    fs.writeFileSync(
      path.join(SRC_FOLDER, `${file}.ts`),
      [WARNING, content].join('\n\n'),
    );
  });
}

/**
 * Scrapes Swagger definitions from {@link STAGING_SWAGGER_URL}
 * as that's where new features are added first
 * @returns Swagger definitions object
 *
 * Note: it is possible to get the definitions from NestJS with
 * `SwaggerModule.createDocument` but we scrape to match deployment
 */
async function getSwaggerDefinitions(): Promise<OpenAPI3> {
  const url = `${STAGING_SWAGGER_URL}/swagger-ui-init.js`;
  const swaggerUiInit = await fetch(url).then((res) => {
    if (res.ok) {
      return res.text();
    } else {
      throw new Error(`Failed to fetch ${url}`);
    }
  });

  // Extract options object from swagger-ui-init.js file
  const optionsMatch = swaggerUiInit.match(/let options = (\{[\s\S]*?\});/);
  if (!optionsMatch?.[1]) {
    throw new Error('No options object');
  }

  const options = JSON.parse(optionsMatch[1]);
  return options.swaggerDoc;
}

/**
 * Converts Swagger definitions to TypeScript schema
 * @param definitions - Swagger definitions object
 * @returns TypeScript schema
 */
async function getSchema(definitions: OpenAPI3): Promise<string> {
  return await openapiTS(definitions).then(astToString);
}

/**
 * Factory for Safe Client Gateway-typed client and singleton
 * @returns - Typed factory and singleton
 */
function getClient(): string {
  const imports = [
    "import _createClient from 'openapi-fetch';",
    `import type { paths } from './${SCHEMA_FILE_NAME}';`,
  ];

  // Typed factory, singleton, singleton getter, singleton URL updater
  const client = [
    'const createClient = _createClient<paths>;',
    `let _client = createClient({
  baseUrl: '${PROD_SWAGGER_URL}',
})`,
    `export function getClient() {
  return _client
}`,
    `export function setBaseUrl(baseUrl: string) {
  _client = createClient({ baseUrl });
}`,
  ];

  return [...imports, ...client].join('\n\n');
}

/**
 * Typed path-specific wrappers for fetching from the Safe Client Gateway
 * @param definitions - Swagger definitions object
 * @returns - Typed wrapper functions for each path
 */
function getWrappers(definitions: OpenAPI3): string {
  if (!definitions.paths) {
    throw new Error('Failed to find paths object');
  }

  const imports = [
    `import _createClient from 'openapi-fetch';
import type { ClientMethod, FetchOptions } from "openapi-fetch";
import type { FilterKeys, HttpMethod, MediaType, PathsWithMethod } from "openapi-typescript-helpers";`,
    `import { getClient } from './client';
import type { paths } from './${SCHEMA_FILE_NAME}';`,
  ];

  // Wrapper to return `data` and throw `error` if applicable
  const clientWrapper = [
    `type ExtractOptions<
  Method extends HttpMethod,
  Path extends keyof paths,
> = FetchOptions<FilterKeys<paths[Path], Method>>;`,
    `async function clientRequest<
  Method extends Extract<keyof paths[keyof paths], HttpMethod>,
  Path extends PathsWithMethod<paths, Method>,
  Options extends ExtractOptions<Method, Path>,
>(method: Method, path: Path, options: Options) {
  const client = getClient();
  const _method = method.toUpperCase() as Uppercase<Method>;
  // @ts-expect-error - paths is generated by openapi-typescript
  const fn = client[_method] as ClientMethod<paths, Method, MediaType>;
  const { data, error } = await fn(path, options);

  if (error || !data) {
    throw error;
  }
  return data;
}`,
  ];

  // Path-specific wrappers with associated types
  const wrappers = Object.keys(definitions.paths).map((path) => {
    const pathItemObj = definitions.paths?.[path];
    if (!pathItemObj || '$ref' in pathItemObj) {
      throw new Error('No PathItemObject in path(s)');
    }

    // get, post, put, etc.
    const method = ((): Method => {
      const isFetchMethod = (method: string): method is Method => {
        // prettier-ignore
        return ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace'].includes(method);
      };
      const [_method] = Object.keys(pathItemObj);
      if (!_method || !isFetchMethod(_method)) {
        throw new Error(`Invalid fetch method: ${_method}`);
      }
      return _method;
    })();

    const operationObject = pathItemObj[method];
    if (!operationObject || !('operationId' in operationObject)) {
      throw new Error(`No operation object for ${path}`);
    }

    // e.g. AboutController_getAbout
    const operationId = operationObject.operationId;
    if (!operationId) {
      throw new Error(`No operationId for ${path}`);
    }

    // e.g. ['AboutController, 'getAbout']
    const [controller, methodName] = operationId.split('_');
    if (!controller || !methodName) {
      throw new Error(`Invalid operationId: ${operationId}`);
    }

    // Prevent duplicated by appending controller version to method
    const wrapperName = ((): string => {
      const versionMatch = controller.match(/v\d+/i);
      return versionMatch?.[0] ? methodName + versionMatch[0] : methodName;
    })();

    // Wrapper-named return types for convenience/grouping of unions
    // e.g. type getAbout = paths["/about"]["get"]["responses"]["200"]["content"]["application/json"];
    const returnType = (() => {
      if (!operationObject.responses) {
        return 'never';
      }

      const statusCodes = Object.keys(operationObject.responses);
      if (statusCodes.length === 0 || statusCodes.length > 1) {
        throw new Error(`Invalid status codes for ${path}: ${statusCodes}`);
      }

      const statusCode = statusCodes[0];
      const response = operationObject.responses[statusCode];
      if (!('content' in response)) {
        return 'never';
      }

      const mediaType = 'application/json';
      if (!response.content?.[mediaType]) {
        throw new Error(`No ${mediaType} for ${path}`);
      }

      return `paths["${path}"]["${method}"]["responses"][${statusCode}]["content"]["${mediaType}"]`;
    })();

    return `export type ${wrapperName} = ${returnType};
export async function ${wrapperName}(options: ExtractOptions<"${method}", "${path}">): Promise<${wrapperName}> {
  return clientRequest("${method}", "${path}", options);
}`;
  });

  return [...imports, ...clientWrapper, ...wrappers].join('\n\n');
}

/**
 * Re-exports client, schema and SDK for convenience
 * @returns - Re-exported schema and SDK
 */
function getBarrel(): string {
  return [CLIENT_FILE_NAME, SCHEMA_FILE_NAME, SDK_FILE_NAME]
    .map((file) => {
      return `export * from './${file}';`;
    })
    .join('\n');
}

/**
 * Builds SDK by transpiling TypeScript to JavaScript
 * and formatting with Prettier
 */
function buildSdk(): void {
  [
    `rm -rf ${DIST_FOLDER_NAME} && tsc`,
    `prettier -w '${DIST_FOLDER_NAME}/**/*'`,
    `prettier -w '${SRC_FOLDER_NAME}/**/*'`,
  ].forEach((command) => {
    child_process.execSync(command);
  });
}
