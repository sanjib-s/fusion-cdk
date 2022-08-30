import * as vpc from "@cdktf/provider-aws/lib/vpc";
import { Construct } from "constructs";
import { FusionConstruct } from "../@types";

export interface SecurityGroupProps extends vpc.SecurityGroupConfig {}

export class SecurityGroup extends Construct implements FusionConstruct {
  readonly construct: vpc.SecurityGroup;

  /**
   * Create a new aws_security_group Resource
   *
   * @param scope — The scope in which to define this construct.
   * @param id — The scoped construct ID. Must be unique amongst siblings in the same scope.
   * @param options — SecurityGroupProps
   */
  constructor(scope: Construct, id: string, options: SecurityGroupProps) {
    super(scope, id);

    this.construct = new vpc.SecurityGroup(this, "securitygroup", options);
  }
}
