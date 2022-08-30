import { cdktf } from "projen";

const project = new cdktf.ConstructLibraryCdktf({
  author: "Slalom Build",
  authorAddress: "opensource@slalom.com",
  authorOrganization: true,
  cdktfVersion: "^0.12.1",
  constructsVersion: "^10.1.84",
  defaultReleaseBranch: "main",
  packageName: "fusion-cdk",
  name: "@slalom-build/fusion-cdk",
  repositoryUrl: "https://github.com/SlalomBuild/fusion-cdk.git",
  npmRegistryUrl: "https://npm.pkg.github.com",
  description: "Secure by default Terraform CDK constructs.",
  license: "MIT",
  staleOptions: {
    issues: {
      daysBeforeStale: 14,
      daysBeforeClose: -1,
    },
    pullRequest: {
      daysBeforeStale: 14,
      daysBeforeClose: -1,
    },
  },
  githubOptions: {
    pullRequestLintOptions: {
      semanticTitleOptions: {
        types: ["feat", "fix", "chore", "docs"],
      },
    },
  },
  deps: ["@cdktf/provider-aws"],
  peerDeps: ["@cdktf/provider-aws"],
  devDeps: ["eslint-plugin-jsdoc", "husky", "lint-staged"],
  eslintOptions: {
    dirs: ["src"],
    prettier: true,
  },
  projenrcTs: true,
  prettier: true,
  gitignore: [
    ".DS_Store",
    "**/*.js",
    "**/*.d.ts",
    "package-lock.json",
    "yarn.lock",
    "/test/__snapshots__/",
  ],
});

project.setScript("pre-commit", "lint-staged");
project.eslint?.addPlugins("jsdoc");
project.eslint?.addExtends("plugin:jsdoc/recommended");
project.eslint?.addRules({
  "jsdoc/require-param-type": "off",
  "jsdoc/require-description": "error",
  "jsdoc/require-returns-type": "off",
  "jsdoc/require-jsdoc": [
    "error",
    {
      require: {
        ArrowFunctionExpression: true,
        ClassDeclaration: false,
        ClassExpression: false,
        FunctionDeclaration: true,
        MethodDefinition: true,
      },
    },
  ],
});

project.synth();
