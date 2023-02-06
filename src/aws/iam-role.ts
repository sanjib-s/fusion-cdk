import * as iam from "@cdktf/provider-aws/lib/iam";
import { Construct } from "constructs";
import { FusionConstruct } from "../@types";

export interface IamRoleProps extends iam.IamRoleConfig {}

export class IamRole extends Construct implements FusionConstruct {
  readonly construct: iam.IamRole;

  /**
   * Create a new aws_iam_role resource.
   *
   * @param scope — The scope in which to define this construct.
   * @param id — The scoped construct ID. Must be unique amongst siblings in the same scope.
   * @param options — IamRoleProps
   */
  constructor(scope: Construct, id: string, options: IamRoleProps) {
    super(scope, id);

    this.construct = new iam.IamRole(this, "iam-role", options);
  }
}
