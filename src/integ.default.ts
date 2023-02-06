import { App, TerraformStack } from "cdktf";
import { fusionaws } from "./";
import { security } from "./@types";

const app = new App();

const stack = new TerraformStack(app, "cdktf-constructs-demo");

new fusionaws.SecurityGroup(stack, "security-group", {
  name: "my-security-group",
});

new fusionaws.IamRole(stack, "iam-role", {
  assumeRolePolicy: "",
});

new fusionaws.S3Bucket(stack, "bucket", {
  encryptionKey: security.NOT_SECURE,
});

new fusionaws.IamPolicy(stack, "iam-policy", {
  path: "*",
  policy: "",
});

app.synth();
