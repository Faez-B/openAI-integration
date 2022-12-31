export default defineEventHandler( async (event) => {
    const body = await readBody(event);
    const { prompt } = body;

    let otherParams = {
        model : "text-davinci-003", 
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        stop: ["You:"],
        additional_prompt: "You: What have you been up to?\nFriend: Watching old movies.\nYou: Did you watch anything interesting?\nFriend:Yeah, I watched an old classic called Casablanca. It was really good!\nYou: ",
    };

    const response = await $fetch('/api/generate', { method: 'POST', body: { prompt, otherParams } });

    return response;
})
