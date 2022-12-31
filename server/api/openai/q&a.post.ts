// import getPromptResponse from "../generate";

export default defineEventHandler( async (event) => {
    const body = await readBody(event);
    const { prompt } = body;

    const otherParams = {
        model : "text-davinci-003", 
        temperature : 0.9, 
        max_tokens : 150, 
        top_p : 1.0, 
        freq_penalty : 0.0, 
        pres_penalty : 0.0
    };

    // const response = await getPromptResponse(prompt, otherParams);

    const response = await $fetch('/api/generate', { method: 'POST', body: { prompt, otherParams } });

    return response;
})
