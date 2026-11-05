# LiteLLM Resource Provider

The LiteLLM Resource Provider bridges the [LiteLLM Terraform provider](https://github.com/BerriAI/terraform-provider-litellm)
to manage LiteLLM models, teams, keys, and other resources.

The Pulumi provider repository is [brokenpip3/pulumi-litellm](https://github.com/brokenpip3/pulumi-litellm).

## Installing

This package is available for several languages/platforms:

### Node.js (JavaScript/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

```bash
npm install @pulumi/litellm
```

or `yarn`:

```bash
yarn add @pulumi/litellm
```

### Python

To use from Python, install using `pip`:

```bash
pip install pulumi_litellm
```

### Go

To use from Go, use `go get` to grab the latest version of the library:

```bash
go get github.com/brokenpip3/pulumi-litellm/sdk/go/...
```

### .NET

To use from .NET, install using `dotnet add package`:

```bash
dotnet add package Pulumi.Litellm
```

## Configuration

The following configuration points are available for the `litellm` provider:

- `litellm:apiBase` (environment: `LITELLM_API_BASE`) - the base URL of the LiteLLM API
- `litellm:apiKey` (environment: `LITELLM_API_KEY`) - the API key; set it with `pulumi config set --secret litellm:apiKey`
- `litellm:insecureSkipVerify` (environment: `LITELLM_INSECURE_SKIP_VERIFY`) - skip TLS verification; defaults to `false`

## Development

Run commands in the repository's mise environment:

```bash
mise exec -- make tfgen
mise exec -- make provider
mise exec -- make generate_sdks
```

If mise is supplied through Nix, use `nix shell nixpkgs#mise --command mise exec -- make tfgen`.
This also makes `mise` available to the Makefile's nested commands.

Keep `provider/cmd/pulumi-resource-litellm/bridge-metadata.json` checked in: `tfgen`
embeds it before updating the automatic mappings. An empty `{}` is only the initial seed.
CI files are generated from `.ci-mgmt.yaml`; update that file and run
`mise exec -- make ci-mgmt` instead of manually replacing names in workflows.

## Reference

For detailed reference documentation, please visit [the Pulumi registry](https://www.pulumi.com/registry/packages/litellm/api-docs/).
