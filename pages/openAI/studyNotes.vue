<template>
    <div class="row">
        <div class="col-12 col-md-5 order-3 order-md-1">
            <OpenAIForm link="notes-study" />
        </div>

        <div class="col-1 d-none d-md-block text-center order-md-2">
            <div class="vr h-100 my-4"></div>
        </div>

        <div class="col-12 d-block d-md-none text-center order-2">
            <hr class="w-100 mx-auto" />
        </div>

        <div class="col-12 col-md-6 order-1 order-md-3">
            <h5 class="mt-3 text-secondary">
                Provide a topic and get study notes.
            </h5>
        
            <h2>
                Example :
            </h2>
        
            <div class="p-3 bg-light border rounded-3 example">
                What are 5 key points I should know when studying Ancient Rome?
                <br/>
                <br/>
                1. Understand the Roman Republic and its political and social structures. <br/>
                2. Learn about the major events and people of the Roman Empire, including the Pax Romana. <br/>
                3. Familiarize yourself with Roman culture and society, including language, art, architecture, literature, law, and religion. <br/>
                4. Study the Roman military, its tactics and organization, and its effects on the empire. <br/>
                5. Examine the decline of the Roman Empire, its eventual fall, and its legacy. <br/>
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