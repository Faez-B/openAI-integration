<script setup>
    const params = {
        model : "text-davinci-003", 
        temperature: 0,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        additional_prompt: "Q: Who is Batman?\nA: Batman is a fictional comic book character.\n\nQ: What is torsalplexity?\nA: ?\n\nQ: What is Devz9?\nA: ?\n\nQ: Who is George Lucas?\nA: George Lucas is American film director and producer famous for creating Star Wars.\n\nQ: What is the capital of California?\nA: Sacramento.\n\nQ: What orbits the Earth?\nA: The Moon.\n\nQ: Who is Fred Rickerson?\nA: ?\n\nQ: What is an atom?\nA: An atom is a tiny particle that makes up everything.\n\nQ: Who is Alvan Muntz?\nA: ?\n\nQ: What is Kozar-09?\nA: ?\n\nQ: How many moons does Mars have?\nA: Two, Phobos and Deimos.\n\nQ: ",
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
                Guide the model towards factual answering by showing it how to respond to questions that fall outside its knowledge base. Using a '?' to indicate a response to words and phrases that it doesn't know provides a natural response that seems to work better than more abstract replies.
            </h5>
        
            <h2>
                Example :
            </h2>
        
            <div class="p-3 bg-light border rounded-3 example">
                Q: Who is Batman?<br/>
                A: Batman is a fictional comic book character.
                <br/><br/>
                Q: What is torsalplexity?<br/>
                A: ?
                <br/><br/>
                Q: What is Devz9?<br/>
                A: ?
                <br/><br/>
                Q: Who is George Lucas?<br/>
                A: George Lucas is American film director and producer famous for creating Star Wars.
                <br/><br/>
                Q: What is the capital of California?<br/>
                A: Sacramento.
                <br/><br/>
                Q: What orbits the Earth?<br/>
                A: The Moon.
                <br/><br/>
                Q: Who is Fred Rickerson?<br/>
                A: ?
                <br/><br/>
                Q: What is an atom?<br/>
                A: An atom is a tiny particle that makes up everything.
                <br/><br/>
                Q: Who is Alvan Muntz?<br/>
                A: ?
                <br/><br/>
                Q: What is Kozar-09?<br/>
                A: ?
                <br/><br/>
                Q: How many moons does Mars have?<br/>
                A: Two, Phobos and Deimos.<br/>
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