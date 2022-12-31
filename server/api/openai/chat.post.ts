export default defineEventHandler( async (event) => {
    const body = await readBody(event);
    const { prompt } = body;

    let otherParams = {
        model : "text-davinci-003", 
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
        additional_prompt: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: "
    };

    const response = await $fetch('/api/generate', { method: 'POST', body: { prompt, otherParams } });

    return response;
})
