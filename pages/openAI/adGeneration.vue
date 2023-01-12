<script setup>
    const params = {
        model : "text-davinci-003", 
        temperature: 0.5,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
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
                Turn a product description into ad copy.
            </h5>
        
            <h2>
                Example :
            </h2>
        
            <div class="p-3 bg-light border rounded-3 example">
                Write a creative ad for the following product to run on Facebook aimed at parents:

                Product: Learning Room is a virtual environment to help students from kindergarten to high school excel in school.
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