import { TerraformResource } from "cdktf";
import { Construct } from "constructs";

/**
 * @internal
 */
export interface FusionConstruct {
  readonly construct: TerraformResource | Construct;
}
