<template>
    <div class="row">
        <div class="col-12 col-md-5 order-3 order-md-1">
            <OpenAIForm link="facts"/>  
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