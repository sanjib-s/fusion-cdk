import { KmsKey } from "@cdktf/provider-aws/lib/kms";
import {
  S3Bucket,
  S3BucketConfig,
  S3BucketPublicAccessBlock,
  S3BucketServerSideEncryptionConfiguration,
} from "@cdktf/provider-aws/lib/s3";
import { TerraformOutput } from "cdktf";
import { Construct } from "constructs";
import * as security from "../security";

export interface SlalomS3BucketProps extends S3BucketConfig {
  readonly encryptionKey: KmsKey | security.NotSecure;
}

export class SlalomS3Bucket extends Construct {
  constructor(scope: Construct, id: string, props: SlalomS3BucketProps) {
    super(scope, id);

    // Add encryption
    const encryption = this.NewEncryption(props.encryptionKey);

    const bucket = new S3Bucket(this, "bucket", {
      ...props,
      versioning: {
        enabled: true,
      },
      serverSideEncryptionConfiguration: encryption,
    });

    // Add public access blocks
    this.NewPublicAccessBlock(bucket);
    this.NewOutputs(bucket);
  }

  private NewPublicAccessBlock(bucket: S3Bucket) {
    return new S3BucketPublicAccessBlock(this, "public-access-block", {
      bucket: bucket.bucket,
      blockPublicAcls: true,
      blockPublicPolicy: true,
      ignorePublicAcls: true,
      restrictPublicBuckets: true,
    });
  }

  private NewEncryption(encryptionKey?: KmsKey | security.NotSecure) {
    let serverSideEncryptionConfiguration: S3BucketServerSideEncryptionConfiguration =
      {
        rule: {
          applyServerSideEncryptionByDefault: {
            sseAlgorithm: "AES256",
          },
        },
      };

    if (encryptionKey != undefined && encryptionKey !== security.NOT_SECURE) {
      serverSideEncryptionConfiguration = {
        rule: {
          applyServerSideEncryptionByDefault: {
            kmsMasterKeyId: encryptionKey.arn,
            sseAlgorithm: "aws:kms",
          },
        },
      };
    }

    return serverSideEncryptionConfiguration;
  }

  private NewOutputs(bucket: S3Bucket) {
    new TerraformOutput(this, "BucketName", {
      value: bucket.bucket,
    });

    new TerraformOutput(this, "BucketArn", {
      value: bucket.arn,
    });
  }
}
