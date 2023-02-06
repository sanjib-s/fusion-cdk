import * as iam from "@cdktf/provider-aws/lib/iam";
import { Construct } from "constructs";
import { FusionConstruct } from "../@types";

export interface IamPolicyProps extends iam.IamPolicyConfig {}

/**
 *
 */
export class IamPolicy extends Construct implements FusionConstruct {
  readonly construct: iam.IamPolicy;

  /**
   * Create a new aws_iam_policy Resource
   *
   * @param scope — The scope in which to define this construct.
   * @param id — The scoped construct ID. Must be unique amongst siblings in the same scope.
   * @param options — IamPolicyProps
   */
  constructor(scope: Construct, id: string, options: IamPolicyProps) {
    super(scope, id);
    this.construct = new iam.IamPolicy(this, "iam-policy", options);
    this.node.addValidation({
      /**
       *
       */
      validate: () => {
        let errors = [];
        if (this.construct.path === "*") {
          errors.push(
            `IAM Policy path "${this.construct.path}" for ${this.construct.friendlyUniqueId} may be overly permissive.`
          );
        }
        return errors;
      },
    });
  }
}
