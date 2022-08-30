import { KmsKey } from "@cdktf/provider-aws/lib/kms";
import * as s3 from "@cdktf/provider-aws/lib/s3";
import { TerraformOutput } from "cdktf";
import { Construct } from "constructs";
import { security, FusionConstruct } from "../@types";

export interface S3BucketProps extends s3.S3BucketConfig {
  readonly encryptionKey: KmsKey | security.NotSecure;
}

export class S3Bucket extends Construct implements FusionConstruct {
  readonly construct: s3.S3Bucket;

  /**
   * Create a new aws_s3_bucket Resource
   *
   * @param scope — The scope in which to define this construct.
   * @param id — The scoped construct ID. Must be unique amongst siblings in the same scope.
   * @param options — S3BucketProps
   */
  constructor(scope: Construct, id: string, options: S3BucketProps) {
    super(scope, id);

    // Add encryption
    const encryption = this.NewEncryption(options.encryptionKey);

    const bucket = new s3.S3Bucket(this, "bucket", {
      ...options,
      versioning: {
        enabled: true,
      },
      serverSideEncryptionConfiguration: encryption,
    });

    // Add public access blocks
    this.NewPublicAccessBlock(bucket);
    this.NewOutputs(bucket);

    this.construct = bucket;
  }

  /**
   * Generate a new public access block for the
   * S3 bucket.
   *
   * @param bucket - The bucket to apply the block
   * @returns S3BucketPublicAccessBlock
   */
  private NewPublicAccessBlock(bucket: s3.S3Bucket) {
    return new s3.S3BucketPublicAccessBlock(this, "public-access-block", {
      bucket: bucket.bucket,
      blockPublicAcls: true,
      blockPublicPolicy: true,
      ignorePublicAcls: true,
      restrictPublicBuckets: true,
    });
  }

  /**
   * Enable bucket encryption using either a kms key
   * or default AES256 encryption.
   *
   * @param encryptionKey - Kms Key or opt out with AES256
   * @returns serverSideEncryptionConfiguration
   */
  private NewEncryption(encryptionKey?: KmsKey | security.NotSecure) {
    let serverSideEncryptionConfiguration: s3.S3BucketServerSideEncryptionConfiguration =
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

  /**
   * Generate Terraform outputs
   *
   * @param bucket - S3Bucket
   */
  private NewOutputs(bucket: s3.S3Bucket) {
    new TerraformOutput(this, "BucketName", {
      value: bucket.bucket,
    });

    new TerraformOutput(this, "BucketArn", {
      value: bucket.arn,
    });
  }
}
