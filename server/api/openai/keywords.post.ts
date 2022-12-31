export default defineEventHandler( async (event) => {
    const body = await readBody(event);
    const { prompt } = body;

    const otherParams = {
        model : "text-davinci-003", 
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
    };

    const response = await $fetch('/api/generate', { method: 'POST', body: { prompt, otherParams } });

    return response;
})
