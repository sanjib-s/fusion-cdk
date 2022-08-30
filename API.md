# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamRole <a name="IamRole" id="fusion-cdk.fusionaws.IamRole"></a>

#### Initializers <a name="Initializers" id="fusion-cdk.fusionaws.IamRole.Initializer"></a>

```typescript
import { fusionaws } from 'fusion-cdk'

new fusionaws.IamRole(scope: Construct, id: string, options: IamRoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#fusion-cdk.fusionaws.IamRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | — The scope in which to define this construct. |
| <code><a href="#fusion-cdk.fusionaws.IamRole.Initializer.parameter.id">id</a></code> | <code>string</code> | — The scoped construct ID. |
| <code><a href="#fusion-cdk.fusionaws.IamRole.Initializer.parameter.options">options</a></code> | <code>fusion-cdk.fusionaws.IamRoleProps</code> | — IamRoleProps. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="fusion-cdk.fusionaws.IamRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

— The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="fusion-cdk.fusionaws.IamRole.Initializer.parameter.id"></a>

- *Type:* string

— The scoped construct ID.

Must be unique amongst siblings in the same scope.

---

##### `options`<sup>Required</sup> <a name="options" id="fusion-cdk.fusionaws.IamRole.Initializer.parameter.options"></a>

- *Type:* fusion-cdk.fusionaws.IamRoleProps

— IamRoleProps.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#fusion-cdk.fusionaws.IamRole.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="fusion-cdk.fusionaws.IamRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#fusion-cdk.fusionaws.IamRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="fusion-cdk.fusionaws.IamRole.isConstruct"></a>

```typescript
import { fusionaws } from 'fusion-cdk'

fusionaws.IamRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="fusion-cdk.fusionaws.IamRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#fusion-cdk.fusionaws.IamRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#fusion-cdk.fusionaws.IamRole.property.construct">construct</a></code> | <code>@cdktf/provider-aws.iam.IamRole</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="fusion-cdk.fusionaws.IamRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `construct`<sup>Required</sup> <a name="construct" id="fusion-cdk.fusionaws.IamRole.property.construct"></a>

```typescript
public readonly construct: IamRole;
```

- *Type:* @cdktf/provider-aws.iam.IamRole

---


### S3Bucket <a name="S3Bucket" id="fusion-cdk.fusionaws.S3Bucket"></a>

#### Initializers <a name="Initializers" id="fusion-cdk.fusionaws.S3Bucket.Initializer"></a>

```typescript
import { fusionaws } from 'fusion-cdk'

new fusionaws.S3Bucket(scope: Construct, id: string, options: S3BucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#fusion-cdk.fusionaws.S3Bucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | — The scope in which to define this construct. |
| <code><a href="#fusion-cdk.fusionaws.S3Bucket.Initializer.parameter.id">id</a></code> | <code>string</code> | — The scoped construct ID. |
| <code><a href="#fusion-cdk.fusionaws.S3Bucket.Initializer.parameter.options">options</a></code> | <code>fusion-cdk.fusionaws.S3BucketProps</code> | — S3BucketProps. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="fusion-cdk.fusionaws.S3Bucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

— The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="fusion-cdk.fusionaws.S3Bucket.Initializer.parameter.id"></a>

- *Type:* string

— The scoped construct ID.

Must be unique amongst siblings in the same scope.

---

##### `options`<sup>Required</sup> <a name="options" id="fusion-cdk.fusionaws.S3Bucket.Initializer.parameter.options"></a>

- *Type:* fusion-cdk.fusionaws.S3BucketProps

— S3BucketProps.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#fusion-cdk.fusionaws.S3Bucket.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="fusion-cdk.fusionaws.S3Bucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#fusion-cdk.fusionaws.S3Bucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="fusion-cdk.fusionaws.S3Bucket.isConstruct"></a>

```typescript
import { fusionaws } from 'fusion-cdk'

fusionaws.S3Bucket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="fusion-cdk.fusionaws.S3Bucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#fusion-cdk.fusionaws.S3Bucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#fusion-cdk.fusionaws.S3Bucket.property.construct">construct</a></code> | <code>@cdktf/provider-aws.s3.S3Bucket</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="fusion-cdk.fusionaws.S3Bucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `construct`<sup>Required</sup> <a name="construct" id="fusion-cdk.fusionaws.S3Bucket.property.construct"></a>

```typescript
public readonly construct: S3Bucket;
```

- *Type:* @cdktf/provider-aws.s3.S3Bucket

---


### SecurityGroup <a name="SecurityGroup" id="fusion-cdk.fusionaws.SecurityGroup"></a>

#### Initializers <a name="Initializers" id="fusion-cdk.fusionaws.SecurityGroup.Initializer"></a>

```typescript
import { fusionaws } from 'fusion-cdk'

new fusionaws.SecurityGroup(scope: Construct, id: string, options: SecurityGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | — The scope in which to define this construct. |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | — The scoped construct ID. |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroup.Initializer.parameter.options">options</a></code> | <code>fusion-cdk.fusionaws.SecurityGroupProps</code> | — SecurityGroupProps. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="fusion-cdk.fusionaws.SecurityGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

— The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="fusion-cdk.fusionaws.SecurityGroup.Initializer.parameter.id"></a>

- *Type:* string

— The scoped construct ID.

Must be unique amongst siblings in the same scope.

---

##### `options`<sup>Required</sup> <a name="options" id="fusion-cdk.fusionaws.SecurityGroup.Initializer.parameter.options"></a>

- *Type:* fusion-cdk.fusionaws.SecurityGroupProps

— SecurityGroupProps.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroup.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="fusion-cdk.fusionaws.SecurityGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="fusion-cdk.fusionaws.SecurityGroup.isConstruct"></a>

```typescript
import { fusionaws } from 'fusion-cdk'

fusionaws.SecurityGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="fusion-cdk.fusionaws.SecurityGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroup.property.construct">construct</a></code> | <code>@cdktf/provider-aws.vpc.SecurityGroup</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="fusion-cdk.fusionaws.SecurityGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `construct`<sup>Required</sup> <a name="construct" id="fusion-cdk.fusionaws.SecurityGroup.property.construct"></a>

```typescript
public readonly construct: SecurityGroup;
```

- *Type:* @cdktf/provider-aws.vpc.SecurityGroup

---


## Structs <a name="Structs" id="Structs"></a>

### IamRoleProps <a name="IamRoleProps" id="fusion-cdk.fusionaws.IamRoleProps"></a>

#### Initializer <a name="Initializer" id="fusion-cdk.fusionaws.IamRoleProps.Initializer"></a>

```typescript
import { fusionaws } from 'fusion-cdk'

const iamRoleProps: fusionaws.IamRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#fusion-cdk.fusionaws.IamRoleProps.property.connection">connection</a></code> | <code>cdktf.ISSHProvisionerConnection \| cdktf.IWinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#fusion-cdk.fusionaws.IamRoleProps.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#fusion-cdk.fusionaws.IamRoleProps.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#fusion-cdk.fusionaws.IamRoleProps.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#fusion-cdk.fusionaws.IamRoleProps.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#fusion-cdk.fusionaws.IamRoleProps.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#fusion-cdk.fusionaws.IamRoleProps.property.provisioners">provisioners</a></code> | <code>cdktf.IFileProvisioner \| cdktf.ILocalExecProvisioner \| cdktf.IRemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#fusion-cdk.fusionaws.IamRoleProps.property.assumeRolePolicy">assumeRolePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#assume_role_policy IamRole#assume_role_policy}. |
| <code><a href="#fusion-cdk.fusionaws.IamRoleProps.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#description IamRole#description}. |
| <code><a href="#fusion-cdk.fusionaws.IamRoleProps.property.forceDetachPolicies">forceDetachPolicies</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#force_detach_policies IamRole#force_detach_policies}. |
| <code><a href="#fusion-cdk.fusionaws.IamRoleProps.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#id IamRole#id}. |
| <code><a href="#fusion-cdk.fusionaws.IamRoleProps.property.inlinePolicy">inlinePolicy</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.iam.IamRoleInlinePolicy[]</code> | inline_policy block. |
| <code><a href="#fusion-cdk.fusionaws.IamRoleProps.property.managedPolicyArns">managedPolicyArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#managed_policy_arns IamRole#managed_policy_arns}. |
| <code><a href="#fusion-cdk.fusionaws.IamRoleProps.property.maxSessionDuration">maxSessionDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#max_session_duration IamRole#max_session_duration}. |
| <code><a href="#fusion-cdk.fusionaws.IamRoleProps.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#name IamRole#name}. |
| <code><a href="#fusion-cdk.fusionaws.IamRoleProps.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#name_prefix IamRole#name_prefix}. |
| <code><a href="#fusion-cdk.fusionaws.IamRoleProps.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#path IamRole#path}. |
| <code><a href="#fusion-cdk.fusionaws.IamRoleProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#permissions_boundary IamRole#permissions_boundary}. |
| <code><a href="#fusion-cdk.fusionaws.IamRoleProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#tags IamRole#tags}. |
| <code><a href="#fusion-cdk.fusionaws.IamRoleProps.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#tags_all IamRole#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="fusion-cdk.fusionaws.IamRoleProps.property.connection"></a>

```typescript
public readonly connection: ISSHProvisionerConnection | IWinrmProvisionerConnection;
```

- *Type:* cdktf.ISSHProvisionerConnection | cdktf.IWinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="fusion-cdk.fusionaws.IamRoleProps.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="fusion-cdk.fusionaws.IamRoleProps.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="fusion-cdk.fusionaws.IamRoleProps.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="fusion-cdk.fusionaws.IamRoleProps.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="fusion-cdk.fusionaws.IamRoleProps.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="fusion-cdk.fusionaws.IamRoleProps.property.provisioners"></a>

```typescript
public readonly provisioners: IFileProvisioner | ILocalExecProvisioner | IRemoteExecProvisioner[];
```

- *Type:* cdktf.IFileProvisioner | cdktf.ILocalExecProvisioner | cdktf.IRemoteExecProvisioner[]

---

##### `assumeRolePolicy`<sup>Required</sup> <a name="assumeRolePolicy" id="fusion-cdk.fusionaws.IamRoleProps.property.assumeRolePolicy"></a>

```typescript
public readonly assumeRolePolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#assume_role_policy IamRole#assume_role_policy}.

---

##### `description`<sup>Optional</sup> <a name="description" id="fusion-cdk.fusionaws.IamRoleProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#description IamRole#description}.

---

##### `forceDetachPolicies`<sup>Optional</sup> <a name="forceDetachPolicies" id="fusion-cdk.fusionaws.IamRoleProps.property.forceDetachPolicies"></a>

```typescript
public readonly forceDetachPolicies: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#force_detach_policies IamRole#force_detach_policies}.

---

##### `id`<sup>Optional</sup> <a name="id" id="fusion-cdk.fusionaws.IamRoleProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#id IamRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inlinePolicy`<sup>Optional</sup> <a name="inlinePolicy" id="fusion-cdk.fusionaws.IamRoleProps.property.inlinePolicy"></a>

```typescript
public readonly inlinePolicy: IResolvable | IamRoleInlinePolicy[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.iam.IamRoleInlinePolicy[]

inline_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#inline_policy IamRole#inline_policy}

---

##### `managedPolicyArns`<sup>Optional</sup> <a name="managedPolicyArns" id="fusion-cdk.fusionaws.IamRoleProps.property.managedPolicyArns"></a>

```typescript
public readonly managedPolicyArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#managed_policy_arns IamRole#managed_policy_arns}.

---

##### `maxSessionDuration`<sup>Optional</sup> <a name="maxSessionDuration" id="fusion-cdk.fusionaws.IamRoleProps.property.maxSessionDuration"></a>

```typescript
public readonly maxSessionDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#max_session_duration IamRole#max_session_duration}.

---

##### `name`<sup>Optional</sup> <a name="name" id="fusion-cdk.fusionaws.IamRoleProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#name IamRole#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="fusion-cdk.fusionaws.IamRoleProps.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#name_prefix IamRole#name_prefix}.

---

##### `path`<sup>Optional</sup> <a name="path" id="fusion-cdk.fusionaws.IamRoleProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#path IamRole#path}.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="fusion-cdk.fusionaws.IamRoleProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#permissions_boundary IamRole#permissions_boundary}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="fusion-cdk.fusionaws.IamRoleProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#tags IamRole#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="fusion-cdk.fusionaws.IamRoleProps.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role#tags_all IamRole#tags_all}.

---

### S3BucketProps <a name="S3BucketProps" id="fusion-cdk.fusionaws.S3BucketProps"></a>

#### Initializer <a name="Initializer" id="fusion-cdk.fusionaws.S3BucketProps.Initializer"></a>

```typescript
import { fusionaws } from 'fusion-cdk'

const s3BucketProps: fusionaws.S3BucketProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.connection">connection</a></code> | <code>cdktf.ISSHProvisionerConnection \| cdktf.IWinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.provisioners">provisioners</a></code> | <code>cdktf.IFileProvisioner \| cdktf.ILocalExecProvisioner \| cdktf.IRemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.accelerationStatus">accelerationStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#acceleration_status S3Bucket#acceleration_status}. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.acl">acl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#acl S3Bucket#acl}. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#arn S3Bucket#arn}. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket S3Bucket#bucket}. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket_prefix S3Bucket#bucket_prefix}. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.corsRule">corsRule</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3.S3BucketCorsRule[]</code> | cors_rule block. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#force_destroy S3Bucket#force_destroy}. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.grant">grant</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3.S3BucketGrant[]</code> | grant block. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#hosted_zone_id S3Bucket#hosted_zone_id}. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#id S3Bucket#id}. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.lifecycleRule">lifecycleRule</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3.S3BucketLifecycleRule[]</code> | lifecycle_rule block. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.logging">logging</a></code> | <code>@cdktf/provider-aws.s3.S3BucketLogging</code> | logging block. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.objectLockConfiguration">objectLockConfiguration</a></code> | <code>@cdktf/provider-aws.s3.S3BucketObjectLockConfiguration</code> | object_lock_configuration block. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.objectLockEnabled">objectLockEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#object_lock_enabled S3Bucket#object_lock_enabled}. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#policy S3Bucket#policy}. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.replicationConfiguration">replicationConfiguration</a></code> | <code>@cdktf/provider-aws.s3.S3BucketReplicationConfiguration</code> | replication_configuration block. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.requestPayer">requestPayer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#request_payer S3Bucket#request_payer}. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code>@cdktf/provider-aws.s3.S3BucketServerSideEncryptionConfiguration</code> | server_side_encryption_configuration block. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags S3Bucket#tags}. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags_all S3Bucket#tags_all}. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-aws.s3.S3BucketTimeouts</code> | timeouts block. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.versioning">versioning</a></code> | <code>@cdktf/provider-aws.s3.S3BucketVersioning</code> | versioning block. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.website">website</a></code> | <code>@cdktf/provider-aws.s3.S3BucketWebsite</code> | website block. |
| <code><a href="#fusion-cdk.fusionaws.S3BucketProps.property.encryptionKey">encryptionKey</a></code> | <code>@cdktf/provider-aws.kms.KmsKey \| string</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="fusion-cdk.fusionaws.S3BucketProps.property.connection"></a>

```typescript
public readonly connection: ISSHProvisionerConnection | IWinrmProvisionerConnection;
```

- *Type:* cdktf.ISSHProvisionerConnection | cdktf.IWinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="fusion-cdk.fusionaws.S3BucketProps.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="fusion-cdk.fusionaws.S3BucketProps.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="fusion-cdk.fusionaws.S3BucketProps.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="fusion-cdk.fusionaws.S3BucketProps.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="fusion-cdk.fusionaws.S3BucketProps.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="fusion-cdk.fusionaws.S3BucketProps.property.provisioners"></a>

```typescript
public readonly provisioners: IFileProvisioner | ILocalExecProvisioner | IRemoteExecProvisioner[];
```

- *Type:* cdktf.IFileProvisioner | cdktf.ILocalExecProvisioner | cdktf.IRemoteExecProvisioner[]

---

##### `accelerationStatus`<sup>Optional</sup> <a name="accelerationStatus" id="fusion-cdk.fusionaws.S3BucketProps.property.accelerationStatus"></a>

```typescript
public readonly accelerationStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#acceleration_status S3Bucket#acceleration_status}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="fusion-cdk.fusionaws.S3BucketProps.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#acl S3Bucket#acl}.

---

##### `arn`<sup>Optional</sup> <a name="arn" id="fusion-cdk.fusionaws.S3BucketProps.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#arn S3Bucket#arn}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="fusion-cdk.fusionaws.S3BucketProps.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket S3Bucket#bucket}.

---

##### `bucketPrefix`<sup>Optional</sup> <a name="bucketPrefix" id="fusion-cdk.fusionaws.S3BucketProps.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket_prefix S3Bucket#bucket_prefix}.

---

##### `corsRule`<sup>Optional</sup> <a name="corsRule" id="fusion-cdk.fusionaws.S3BucketProps.property.corsRule"></a>

```typescript
public readonly corsRule: IResolvable | S3BucketCorsRule[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3.S3BucketCorsRule[]

cors_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#cors_rule S3Bucket#cors_rule}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="fusion-cdk.fusionaws.S3BucketProps.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#force_destroy S3Bucket#force_destroy}.

---

##### `grant`<sup>Optional</sup> <a name="grant" id="fusion-cdk.fusionaws.S3BucketProps.property.grant"></a>

```typescript
public readonly grant: IResolvable | S3BucketGrant[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3.S3BucketGrant[]

grant block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#grant S3Bucket#grant}

---

##### `hostedZoneId`<sup>Optional</sup> <a name="hostedZoneId" id="fusion-cdk.fusionaws.S3BucketProps.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#hosted_zone_id S3Bucket#hosted_zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="fusion-cdk.fusionaws.S3BucketProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#id S3Bucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycleRule`<sup>Optional</sup> <a name="lifecycleRule" id="fusion-cdk.fusionaws.S3BucketProps.property.lifecycleRule"></a>

```typescript
public readonly lifecycleRule: IResolvable | S3BucketLifecycleRule[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3.S3BucketLifecycleRule[]

lifecycle_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#lifecycle_rule S3Bucket#lifecycle_rule}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="fusion-cdk.fusionaws.S3BucketProps.property.logging"></a>

```typescript
public readonly logging: S3BucketLogging;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketLogging

logging block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#logging S3Bucket#logging}

---

##### `objectLockConfiguration`<sup>Optional</sup> <a name="objectLockConfiguration" id="fusion-cdk.fusionaws.S3BucketProps.property.objectLockConfiguration"></a>

```typescript
public readonly objectLockConfiguration: S3BucketObjectLockConfiguration;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketObjectLockConfiguration

object_lock_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#object_lock_configuration S3Bucket#object_lock_configuration}

---

##### `objectLockEnabled`<sup>Optional</sup> <a name="objectLockEnabled" id="fusion-cdk.fusionaws.S3BucketProps.property.objectLockEnabled"></a>

```typescript
public readonly objectLockEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#object_lock_enabled S3Bucket#object_lock_enabled}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="fusion-cdk.fusionaws.S3BucketProps.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#policy S3Bucket#policy}.

---

##### `replicationConfiguration`<sup>Optional</sup> <a name="replicationConfiguration" id="fusion-cdk.fusionaws.S3BucketProps.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: S3BucketReplicationConfiguration;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketReplicationConfiguration

replication_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#replication_configuration S3Bucket#replication_configuration}

---

##### `requestPayer`<sup>Optional</sup> <a name="requestPayer" id="fusion-cdk.fusionaws.S3BucketProps.property.requestPayer"></a>

```typescript
public readonly requestPayer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#request_payer S3Bucket#request_payer}.

---

##### `serverSideEncryptionConfiguration`<sup>Optional</sup> <a name="serverSideEncryptionConfiguration" id="fusion-cdk.fusionaws.S3BucketProps.property.serverSideEncryptionConfiguration"></a>

```typescript
public readonly serverSideEncryptionConfiguration: S3BucketServerSideEncryptionConfiguration;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketServerSideEncryptionConfiguration

server_side_encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#server_side_encryption_configuration S3Bucket#server_side_encryption_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="fusion-cdk.fusionaws.S3BucketProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags S3Bucket#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="fusion-cdk.fusionaws.S3BucketProps.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags_all S3Bucket#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="fusion-cdk.fusionaws.S3BucketProps.property.timeouts"></a>

```typescript
public readonly timeouts: S3BucketTimeouts;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketTimeouts

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#timeouts S3Bucket#timeouts}

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="fusion-cdk.fusionaws.S3BucketProps.property.versioning"></a>

```typescript
public readonly versioning: S3BucketVersioning;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketVersioning

versioning block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#versioning S3Bucket#versioning}

---

##### `website`<sup>Optional</sup> <a name="website" id="fusion-cdk.fusionaws.S3BucketProps.property.website"></a>

```typescript
public readonly website: S3BucketWebsite;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketWebsite

website block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#website S3Bucket#website}

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="fusion-cdk.fusionaws.S3BucketProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: KmsKey | string;
```

- *Type:* @cdktf/provider-aws.kms.KmsKey | string

---

### SecurityGroupProps <a name="SecurityGroupProps" id="fusion-cdk.fusionaws.SecurityGroupProps"></a>

#### Initializer <a name="Initializer" id="fusion-cdk.fusionaws.SecurityGroupProps.Initializer"></a>

```typescript
import { fusionaws } from 'fusion-cdk'

const securityGroupProps: fusionaws.SecurityGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroupProps.property.connection">connection</a></code> | <code>cdktf.ISSHProvisionerConnection \| cdktf.IWinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroupProps.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroupProps.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroupProps.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroupProps.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroupProps.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroupProps.property.provisioners">provisioners</a></code> | <code>cdktf.IFileProvisioner \| cdktf.ILocalExecProvisioner \| cdktf.IRemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroupProps.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}. |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroupProps.property.egress">egress</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.vpc.SecurityGroupEgress[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#egress SecurityGroup#egress}. |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroupProps.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#id SecurityGroup#id}. |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroupProps.property.ingress">ingress</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.vpc.SecurityGroupIngress[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ingress SecurityGroup#ingress}. |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroupProps.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name SecurityGroup#name}. |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroupProps.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name_prefix SecurityGroup#name_prefix}. |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroupProps.property.revokeRulesOnDelete">revokeRulesOnDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#revoke_rules_on_delete SecurityGroup#revoke_rules_on_delete}. |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroupProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags SecurityGroup#tags}. |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroupProps.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags_all SecurityGroup#tags_all}. |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroupProps.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-aws.vpc.SecurityGroupTimeouts</code> | timeouts block. |
| <code><a href="#fusion-cdk.fusionaws.SecurityGroupProps.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#vpc_id SecurityGroup#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="fusion-cdk.fusionaws.SecurityGroupProps.property.connection"></a>

```typescript
public readonly connection: ISSHProvisionerConnection | IWinrmProvisionerConnection;
```

- *Type:* cdktf.ISSHProvisionerConnection | cdktf.IWinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="fusion-cdk.fusionaws.SecurityGroupProps.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="fusion-cdk.fusionaws.SecurityGroupProps.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="fusion-cdk.fusionaws.SecurityGroupProps.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="fusion-cdk.fusionaws.SecurityGroupProps.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="fusion-cdk.fusionaws.SecurityGroupProps.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="fusion-cdk.fusionaws.SecurityGroupProps.property.provisioners"></a>

```typescript
public readonly provisioners: IFileProvisioner | ILocalExecProvisioner | IRemoteExecProvisioner[];
```

- *Type:* cdktf.IFileProvisioner | cdktf.ILocalExecProvisioner | cdktf.IRemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="fusion-cdk.fusionaws.SecurityGroupProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}.

---

##### `egress`<sup>Optional</sup> <a name="egress" id="fusion-cdk.fusionaws.SecurityGroupProps.property.egress"></a>

```typescript
public readonly egress: IResolvable | SecurityGroupEgress[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.vpc.SecurityGroupEgress[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#egress SecurityGroup#egress}.

---

##### `id`<sup>Optional</sup> <a name="id" id="fusion-cdk.fusionaws.SecurityGroupProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#id SecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="fusion-cdk.fusionaws.SecurityGroupProps.property.ingress"></a>

```typescript
public readonly ingress: IResolvable | SecurityGroupIngress[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.vpc.SecurityGroupIngress[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ingress SecurityGroup#ingress}.

---

##### `name`<sup>Optional</sup> <a name="name" id="fusion-cdk.fusionaws.SecurityGroupProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name SecurityGroup#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="fusion-cdk.fusionaws.SecurityGroupProps.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name_prefix SecurityGroup#name_prefix}.

---

##### `revokeRulesOnDelete`<sup>Optional</sup> <a name="revokeRulesOnDelete" id="fusion-cdk.fusionaws.SecurityGroupProps.property.revokeRulesOnDelete"></a>

```typescript
public readonly revokeRulesOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#revoke_rules_on_delete SecurityGroup#revoke_rules_on_delete}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="fusion-cdk.fusionaws.SecurityGroupProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags SecurityGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="fusion-cdk.fusionaws.SecurityGroupProps.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags_all SecurityGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="fusion-cdk.fusionaws.SecurityGroupProps.property.timeouts"></a>

```typescript
public readonly timeouts: SecurityGroupTimeouts;
```

- *Type:* @cdktf/provider-aws.vpc.SecurityGroupTimeouts

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#timeouts SecurityGroup#timeouts}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="fusion-cdk.fusionaws.SecurityGroupProps.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#vpc_id SecurityGroup#vpc_id}.

---



