<template>
    <div class="row">
        <div class="col-12 col-md-5 order-3 order-md-1">
            <OpenAIForm link="friend-chat" />
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
        
            <div class="p-3 bg-light border rounded-3">
                You: What have you been up to?<br/>
                Friend: Watching old movies.<br/>
                You: Did you watch anything interesting?<br/>
                Friend:Yeah, I watched an old classic called Casablanca. It was really good!<br/>
            </div>
        </div>
    </div>
</template>