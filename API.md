# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SlalomSecurityGroup <a name="SlalomSecurityGroup" id="blocks.SlalomSecurityGroup"></a>

#### Initializers <a name="Initializers" id="blocks.SlalomSecurityGroup.Initializer"></a>

```typescript
import { SlalomSecurityGroup } from 'blocks'

new SlalomSecurityGroup(scope: Construct, id: string, props: SlalomSecurityGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#blocks.SlalomSecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#blocks.SlalomSecurityGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#blocks.SlalomSecurityGroup.Initializer.parameter.props">props</a></code> | <code><a href="#blocks.SlalomSecurityGroupProps">SlalomSecurityGroupProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="blocks.SlalomSecurityGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="blocks.SlalomSecurityGroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="blocks.SlalomSecurityGroup.Initializer.parameter.props"></a>

- *Type:* <a href="#blocks.SlalomSecurityGroupProps">SlalomSecurityGroupProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#blocks.SlalomSecurityGroup.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="blocks.SlalomSecurityGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#blocks.SlalomSecurityGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="blocks.SlalomSecurityGroup.isConstruct"></a>

```typescript
import { SlalomSecurityGroup } from 'blocks'

SlalomSecurityGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="blocks.SlalomSecurityGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#blocks.SlalomSecurityGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="blocks.SlalomSecurityGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### SlalomSecurityGroupProps <a name="SlalomSecurityGroupProps" id="blocks.SlalomSecurityGroupProps"></a>

#### Initializer <a name="Initializer" id="blocks.SlalomSecurityGroupProps.Initializer"></a>

```typescript
import { SlalomSecurityGroupProps } from 'blocks'

const slalomSecurityGroupProps: SlalomSecurityGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#blocks.SlalomSecurityGroupProps.property.connection">connection</a></code> | <code>cdktf.ISSHProvisionerConnection \| cdktf.IWinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#blocks.SlalomSecurityGroupProps.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#blocks.SlalomSecurityGroupProps.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#blocks.SlalomSecurityGroupProps.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#blocks.SlalomSecurityGroupProps.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#blocks.SlalomSecurityGroupProps.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#blocks.SlalomSecurityGroupProps.property.provisioners">provisioners</a></code> | <code>cdktf.IFileProvisioner \| cdktf.ILocalExecProvisioner \| cdktf.IRemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#blocks.SlalomSecurityGroupProps.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}. |
| <code><a href="#blocks.SlalomSecurityGroupProps.property.egress">egress</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.vpc.SecurityGroupEgress[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#egress SecurityGroup#egress}. |
| <code><a href="#blocks.SlalomSecurityGroupProps.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#id SecurityGroup#id}. |
| <code><a href="#blocks.SlalomSecurityGroupProps.property.ingress">ingress</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.vpc.SecurityGroupIngress[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ingress SecurityGroup#ingress}. |
| <code><a href="#blocks.SlalomSecurityGroupProps.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name SecurityGroup#name}. |
| <code><a href="#blocks.SlalomSecurityGroupProps.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name_prefix SecurityGroup#name_prefix}. |
| <code><a href="#blocks.SlalomSecurityGroupProps.property.revokeRulesOnDelete">revokeRulesOnDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#revoke_rules_on_delete SecurityGroup#revoke_rules_on_delete}. |
| <code><a href="#blocks.SlalomSecurityGroupProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags SecurityGroup#tags}. |
| <code><a href="#blocks.SlalomSecurityGroupProps.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags_all SecurityGroup#tags_all}. |
| <code><a href="#blocks.SlalomSecurityGroupProps.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-aws.vpc.SecurityGroupTimeouts</code> | timeouts block. |
| <code><a href="#blocks.SlalomSecurityGroupProps.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#vpc_id SecurityGroup#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="blocks.SlalomSecurityGroupProps.property.connection"></a>

```typescript
public readonly connection: ISSHProvisionerConnection | IWinrmProvisionerConnection;
```

- *Type:* cdktf.ISSHProvisionerConnection | cdktf.IWinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="blocks.SlalomSecurityGroupProps.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="blocks.SlalomSecurityGroupProps.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="blocks.SlalomSecurityGroupProps.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="blocks.SlalomSecurityGroupProps.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="blocks.SlalomSecurityGroupProps.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="blocks.SlalomSecurityGroupProps.property.provisioners"></a>

```typescript
public readonly provisioners: IFileProvisioner | ILocalExecProvisioner | IRemoteExecProvisioner[];
```

- *Type:* cdktf.IFileProvisioner | cdktf.ILocalExecProvisioner | cdktf.IRemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="blocks.SlalomSecurityGroupProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}.

---

##### `egress`<sup>Optional</sup> <a name="egress" id="blocks.SlalomSecurityGroupProps.property.egress"></a>

```typescript
public readonly egress: IResolvable | SecurityGroupEgress[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.vpc.SecurityGroupEgress[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#egress SecurityGroup#egress}.

---

##### `id`<sup>Optional</sup> <a name="id" id="blocks.SlalomSecurityGroupProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#id SecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="blocks.SlalomSecurityGroupProps.property.ingress"></a>

```typescript
public readonly ingress: IResolvable | SecurityGroupIngress[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.vpc.SecurityGroupIngress[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ingress SecurityGroup#ingress}.

---

##### `name`<sup>Optional</sup> <a name="name" id="blocks.SlalomSecurityGroupProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name SecurityGroup#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="blocks.SlalomSecurityGroupProps.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name_prefix SecurityGroup#name_prefix}.

---

##### `revokeRulesOnDelete`<sup>Optional</sup> <a name="revokeRulesOnDelete" id="blocks.SlalomSecurityGroupProps.property.revokeRulesOnDelete"></a>

```typescript
public readonly revokeRulesOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#revoke_rules_on_delete SecurityGroup#revoke_rules_on_delete}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="blocks.SlalomSecurityGroupProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags SecurityGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="blocks.SlalomSecurityGroupProps.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags_all SecurityGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="blocks.SlalomSecurityGroupProps.property.timeouts"></a>

```typescript
public readonly timeouts: SecurityGroupTimeouts;
```

- *Type:* @cdktf/provider-aws.vpc.SecurityGroupTimeouts

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#timeouts SecurityGroup#timeouts}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="blocks.SlalomSecurityGroupProps.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#vpc_id SecurityGroup#vpc_id}.

---



