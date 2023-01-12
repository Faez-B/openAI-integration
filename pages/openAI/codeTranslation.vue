<script setup>
    const params = {
        model : "text-davinci-003", 
        temperature: 0,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
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
                Explain a piece of Python code in human understandable language.
            </h5>
        
            <h2>
                Example :
            </h2>
        
            <div class="p-3 bg-light border rounded-3 example">
                # Python 3 <br/>
                def remove_common_prefix(x, prefix, ws_prefix): <br/>
                    x["completion"] = x["completion"].str[len(prefix) :] <br/>
                    if ws_prefix: <br/>
                        # keep the single whitespace as prefix <br/>
                        x["completion"] = " " + x["completion"] <br/>
                return x <br/>
                <br/>
                # Explanation of what the code does<br/>
                <br/>
                # The code above is a function that takes a dataframe and a prefix as input and returns a dataframe with the prefix removed from the completion column.<br/>
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