import {
  SecurityGroup,
  SecurityGroupConfig,
} from "@cdktf/provider-aws/lib/vpc";
import { Construct } from "constructs";

export interface SlalomSecurityGroupProps extends SecurityGroupConfig {}

export class SlalomSecurityGroup extends Construct {
  constructor(scope: Construct, id: string, props: SlalomSecurityGroupProps) {
    super(scope, id);

    new SecurityGroup(this, "securitygroup", props);
  }
}
