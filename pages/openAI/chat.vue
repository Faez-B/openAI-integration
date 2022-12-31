<template>
    <div class="row">
        <div class="col-12 col-md-5 order-3 order-md-1">
            <OpenAIForm link="chat" />
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
        
            <div class="p-3 bg-light border rounded-3">
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