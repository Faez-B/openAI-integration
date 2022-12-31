export default defineEventHandler( async (event) => {
    const body = await readBody(event);
    const { prompt } = body;

    const otherParams = {
        model : "text-davinci-003", 
        temperature: 0,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\"\"\""],
    };

    const response = await $fetch('/api/generate', { method: 'POST', body: { prompt, otherParams } });

    return response;
})
