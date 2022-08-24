import { cdktf } from "projen";

const project = new cdktf.ConstructLibraryCdktf({
  author: "Slalom Build",
  authorAddress: "opensource@slalom.com",
  authorOrganization: true,
  cdktfVersion: "^0.12.1",
  constructsVersion: "^10.1.84",
  defaultReleaseBranch: "main",
  packageName: "blocks",
  name: "@slalom-build/blocks",
  repositoryUrl: "https://github.com/SlalomBuild/blocks.git",
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
project.synth();
