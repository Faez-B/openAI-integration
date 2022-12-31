<template>
    <div class="row">
        <div class="col-12 col-md-5 order-3 order-md-1">
            <OpenAIForm link="js-helper" />
        </div>

        <div class="col-1 d-none d-md-block text-center order-md-2">
            <div class="vr h-100 my-4"></div>
        </div>

        <div class="col-12 d-block d-md-none text-center order-2">
            <hr class="w-100 mx-auto" />
        </div>

        <div class="col-12 col-md-6 order-1 order-md-3">
            <h5 class="mt-3 text-secondary">
                This is a message-style chatbot that can answer questions about using JavaScript. It uses a few examples to get the conversation started.
            </h5>
        
            <h2>
                Example :
            </h2>
        
            <div class="p-3 bg-light border rounded-3 example">
                You: How do I combine arrays? <br/>
                JavaScript chatbot: You can use the concat() method. <br/>
                You: How do you make an alert appear after 10 seconds? <br/>
                JavaScript chatbot : You can use the setTimeout() method. <br/>
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