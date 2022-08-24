import { App, TerraformStack } from "cdktf";
import { SlalomS3Bucket } from "./aws/s3-bucket";
import { SlalomSecurityGroup } from "./index";
import * as security from "./security";

const app = new App();

const stack = new TerraformStack(app, "cdktf-constructs-demo");
new SlalomSecurityGroup(stack, "security-group", {
  name: "my-security-group",
});

new SlalomS3Bucket(stack, "bucket", {
  encryptionKey: security.NOT_SECURE,
});

app.synth();
