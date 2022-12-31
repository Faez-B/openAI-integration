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
        additional_prompt: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: I'd like to cancel my subscription.\nAI: I'm sorry to hear you want to cancel, but I can help with that. What is the email address you used to sign up for the service?\nHuman: [USER EMAIL ADDRESS]\nAI: Please give me a moment while I look up your account information.\nAI: I have located your account and see that you signed up on January 1, 2018. Is this correct?\nHuman: Yes\nAI: I have cancelled your subscription. Is there anything else I can help you with today?\nHuman: No, that will be all.\nAI: Thank you for chatting with me today. Have a wonderful day!\nHuman: You too. Bye!\nAI: Bye!\n\nHuman:",
    };

    const response = await $fetch('/api/generate', { method: 'POST', body: { prompt, otherParams } });

    return response;
})
