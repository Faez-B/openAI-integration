import { Configuration, OpenAIApi } from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if ( ! OPENAI_API_KEY ) {
    console.log("No OpenAI API key found. Please set the OPENAI_API_KEY environment variable.");
}

const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default defineEventHandler( async (event) => {
    const body = await readBody(event);

    const { prompt } = body;

    const response = await openai.createImage({
        prompt,
        n: 1,
        size: "1024x1024",
    });

    return response.data.data[0].url;
});