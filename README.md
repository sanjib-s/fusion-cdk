# Fusion CDK

Secure by default cloud infrastructure configuration using the Terraform CDK.

## Install 📥

Install the library

### Typescript/Javascript

```shell
npm install @slalom-build/fusion-cdk
```

### Golang

```shell
go get github.com/SlalomBuild/fusion-cdk-go
```

## Usage ⚡️

Getting started with the Fusion CDK library is almost exactly like using the terraform cdk constructs you're already used to. Each construct is a light wrapper around the original provider with some opinionated security constraints added on.

```typescript
import { App, TerraformStack } from "cdktf";
import * as fusion from "@slalom-build/fusion-cdk";
import { security } from "@slalom-build/fusion-cdk/@types";

const app = new App();

const stack = new TerraformStack(app, "cdktf-constructs-demo");

new fusion.S3Bucket(stack, "bucket", {
  // You can opt out of security controls 
  // by explicitly marking your property as insecure
  encryptionKey: security.NOT_SECURE,
});

app.synth();
```

## Development

For detailed development instructions, view our [DEVELOPMENT.md](./github/DEVELOPMENT.md) and [CONTRIBUTING.md](.github/CONTRIBUTING.md).