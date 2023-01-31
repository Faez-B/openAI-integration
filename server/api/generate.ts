import { Configuration, OpenAIApi } from "openai";

const runtimeConfig = useRuntimeConfig();
const { OPENAI_API_KEY } = runtimeConfig;

if ( ! OPENAI_API_KEY ) {
    console.log("No OpenAI API key found. Please set the OPENAI_API_KEY environment variable.");
}

const configuration = new Configuration({
    // apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

type otherParams = {
    model: string,
    temperature: number,
    max_tokens: number,
    top_p: number,
    frequency_penalty: number,
    presence_penalty: number,
    stop?: string[],
    additional_prompt?: string,
};

async function getPromptResponse(prompt : string, otherParams : otherParams) {
    const { model, temperature, max_tokens, top_p, frequency_penalty, presence_penalty, additional_prompt, stop } = otherParams;

    if (additional_prompt) {
        prompt = additional_prompt + prompt;
    }

    const completion = await openai.createCompletion({
        model,
        prompt,
        temperature,
        max_tokens,
        top_p,
        frequency_penalty,
        presence_penalty,
        stop,
    });

    return completion.data.choices[0].text;
} 

export default defineEventHandler( async (event) => {
    const body = await readBody(event);
    const { prompt, otherParams } = body;

    const response = await getPromptResponse(prompt, otherParams);

    return response;
});