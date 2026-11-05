import * as pulumi from "@pulumi/pulumi";
import * as litellm from "@pulumi/litellm";

const config = new pulumi.Config();
const model = new litellm.Model("model", {
    modelName: "gpt-4o",
    customLlmProvider: "openai",
    baseModel: "gpt-4o",
    modelApiKey: config.requireSecret("openaiApiKey"),
});

export const modelId = model.id;
