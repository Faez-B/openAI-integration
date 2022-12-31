import { Configuration, OpenAIApi } from "openai";

const runtimeConfig = useRuntimeConfig();
const { OPENAI_API_KEY } = runtimeConfig;

const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

type otherParams = {
    model: string,
    temperature: number,
    max_tokens: number,
    top_p: number,
    frequency_penalty: number,
    presence_penalty: number,
};

async function getPromptResponse(prompt : string, otherParams : otherParams) {
    const { model, temperature, max_tokens, top_p, frequency_penalty, presence_penalty } = otherParams;

    const completion = await openai.createCompletion({
        model,
        prompt,
        temperature,
        max_tokens,
        top_p,
        frequency_penalty,
        presence_penalty,
    });

    return completion.data.choices[0].text;
} 

export default defineEventHandler( async (event) => {
    const body = await readBody(event);
    const { prompt, otherParams } = body;

    const response = await getPromptResponse(prompt, otherParams);

    return response;
});