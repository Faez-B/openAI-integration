<script setup>
    const params = {
        model : "text-davinci-003", 
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
        additional_prompt: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: I'd like to cancel my subscription.\nAI: I'm sorry to hear you want to cancel, but I can help with that. What is the email address you used to sign up for the service?\nHuman: [USER EMAIL ADDRESS]\nAI: Please give me a moment while I look up your account information.\nAI: I have located your account and see that you signed up on January 1, 2018. Is this correct?\nHuman: Yes\nAI: I have cancelled your subscription. Is there anything else I can help you with today?\nHuman: No, that will be all.\nAI: Thank you for chatting with me today. Have a wonderful day!\nHuman: You too. Bye!\nAI: Bye!\n\nHuman:",
    };
</script>

<template>
    <div class="row">
        <div class="col-12 col-md-5 order-3 order-md-1">
            <OpenAIForm :params="params" />
        </div>

        <div class="col-1 d-none d-md-block text-center order-md-2">
            <div class="vr h-100 my-4"></div>
        </div>

        <div class="col-12 d-block d-md-none text-center order-2">
            <hr class="w-100 mx-auto" />
        </div>

        <div class="col-12 col-md-6 order-1 order-md-3">
            <h5 class="mt-3 text-secondary">
                Open ended conversation with an AI assistant.
            </h5>
        
            <h2>
                Example :
            </h2>
        
            <div class="p-3 bg-light border rounded-3 example">
                The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.
                <br/>
                <br/>
                Human: Hello, who are you?
                <br/>
                AI: I am an AI created by OpenAI. How can I help you today?
                <br/>
                Human: I'd like to cancel my subscription.
                <br/>
                AI: I understand, I can help you with canceling your subscription. Please provide me with your account details so that I can begin processing the cancellation.
            </div>
        </div>
    </div>
</template>

<style scoped>
    .example {
        max-height: 35rem;
        overflow: auto;
    }
</style>