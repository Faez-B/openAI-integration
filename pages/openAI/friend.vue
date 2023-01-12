<script setup>
    const params = {
        model : "text-davinci-003", 
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        stop: ["You:"],
        additional_prompt: "You: What have you been up to?\nFriend: Watching old movies.\nYou: Did you watch anything interesting?\nFriend:Yeah, I watched an old classic called Casablanca. It was really good!\nYou: ",
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
                Emulate a text message conversation.
            </h5>
        
            <h2>
                Example :
            </h2>
        
            <div class="p-3 bg-light border rounded- example">
                You: What have you been up to?<br/>
                Friend: Watching old movies.<br/>
                You: Did you watch anything interesting?<br/>
                Friend:Yeah, I watched an old classic called Casablanca. It was really good!<br/>
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