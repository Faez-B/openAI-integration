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
                Turn meeting notes into a summary.
            </h5>
        
            <h2>
                Example :
            </h2>
        
            <div class="p-3 bg-light border rounded-3 example">
                Convert my short hand into a first-hand account of the meeting: <br/>
 <br/>
                Tom: Profits up 50% <br/>
                Jane: New servers are online <br/>
                Kjel: Need more time to fix software <br/>
                Jane: Happy to help <br/>
                Parkman: Beta testing almost done <br/>
 <br/>
                At the meeting, Tom reported that profits had increased by 50%. Jane then mentioned that the new servers were online. Kjel mentioned that they needed more time to fix the software, and Jane offered to help. Finally, Parkman reported that the beta testing was almost done.
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