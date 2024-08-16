# Safe Gateway TypeScript SDK

A TypeScript SDK for the [Safe Client Gateway](https://github.com/safe-global/safe-client-gateway).

## Usage Policy

**Important**: The Safe Client Gateway is intended for internal use only and is not intended for public use. Please do not use this SDK if you’re building a public-facing application, such as a Safe App.

## Installation

To install the SDK, run:

```shell
yarn add git+https://github.com/safe-global/safe-client-gateway-sdk.git#v1.0.0
```

Replace v1.0.0 with the specific tag you want to install.

## Example Usage

Here’s how you can import and use the SDK to retrieve information about a specific chain:

```ts
import { getChain, type Chain } from "safe-client-gateway-sdk";

const chain = await getChain({
  path: {
    chainId: "1",
  },
});

if (chains.error) {
  throw chains.error;
}

const result: Chain = chains.data;
```

## Customization

The SDK needs no initialization. However, if you need to override the base URL, you can do so like this:

```ts
import { setBaseUrl } from "safe-client-gateway-sdk";

// Example: use the staging deployment
setBaseUrl("https://safe-client.staging.5afe.dev");
```

## Generating a New Build

If there are any changes to the Safe Client Gateway, you can generate new types and helpers by running the “Generate SDK” workflow.
