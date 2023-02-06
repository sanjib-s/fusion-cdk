import { AwsProvider } from "@cdktf/provider-aws";
import { TerraformStack, Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest";
import { fusionaws } from "../src";
import { NOT_SECURE } from "../src/@types/security";

Testing.setupJest();

describe("AWS", () => {
  describe("Security group", () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");
    new AwsProvider(stack, "provider");

    it("should produce valid terraform", () => {
      const properties: fusionaws.SecurityGroupProps = {
        name: "my-security-group",
      };

      new fusionaws.SecurityGroup(stack, "test-security-group", properties);
      expect(Testing.fullSynth(stack)).toBeValidTerraform();
    });
  });

  describe("s3 bucket", () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    new AwsProvider(stack, "provider");

    it("should produce valid terraform", () => {
      const properties: fusionaws.S3BucketProps = {
        bucket: "my-bucket",
        encryptionKey: NOT_SECURE,
      };

      new fusionaws.S3Bucket(stack, "test-s3-bucket", properties);
      expect(Testing.fullSynth(stack)).toBeValidTerraform();
    });
  });

  describe("IAM role", () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");
    new AwsProvider(stack, "provider");

    it("should produce valid terraform", () => {
      const properties: fusionaws.IamRoleProps = {
        name: "my-iam-role",
        assumeRolePolicy: JSON.stringify({
          Version: "2012-10-17",
          Statement: [
            {
              Action: "sts:AssumeRole",
              Principal: {
                Service: "ec2.amazonaws.com",
              },
              Effect: "Allow",
            },
          ],
        }),
      };

      new fusionaws.IamRole(stack, "test-iam-role", properties);
      expect(Testing.fullSynth(stack)).toBeValidTerraform();
    });
  });

  describe("IAM policy", () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");
    new AwsProvider(stack, "provider");

    it("should produce valid terraform", () => {
      const properties: fusionaws.IamPolicyProps = {
        name: "my-iam-policy",
        path: "*",
        policy: JSON.stringify({
          Version: "2012-10-17",
          Statement: [
            {
              Action: "sts:AssumeRole",
              Principal: {
                Service: "ec2.amazonaws.com",
              },
              Effect: "Allow",
            },
          ],
        }),
      };

      new fusionaws.IamPolicy(stack, "test-iam-policy", properties);
      expect(Testing.fullSynth(stack)).toBeValidTerraform();
    });
  });
});
