<template>
    <div class="row">
        <div class="col-12 col-md-5 order-3 order-md-1">
            <OpenAIForm link="q&a" />
        </div>

        <div class="col-1 d-none d-md-block text-center order-md-2">
            <div class="vr h-100 my-4"></div>
        </div>

        <div class="col-12 d-block d-md-none text-center order-2">
            <hr class="w-100 mx-auto" />
        </div>

        <div class="col-12 col-md-6 order-1 order-md-3">
            <h5 class="mt-3 text-secondary">
                Answer questions based on existing knowledge.
            </h5>
        
            <h2>
                Example :
            </h2>
        
            <div class="p-3 bg-light border rounded-3 example">
                I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown".
                <br />
                Q: What is human life expectancy in the United States? <br/>
                A: Human life expectancy in the United States is 78 years.
                <br />
                <br />        
                Q: Who was president of the United States in 1955? <br/>
                A: Dwight D. Eisenhower was president of the United States in 1955.
                <br />
                <br />        
                Q: Which party did he belong to? <br/>
                A: He belonged to the Republican Party.
                <br />
                <br />        
                Q: What is the square root of banana? <br/>
                A: Unknown
                <br />
                <br />        
                Q: How does a telescope work? <br/>
                A: Telescopes use lenses or mirrors to focus light and make objects appear closer.
                <br />
                <br />        
                Q: Where were the 1992 Olympics held? <br/>
                A: The 1992 Olympics were held in Barcelona, Spain.
                <br />
                <br />        
                Q: How many squigs are in a bonk? <br/>
                A: Unknown
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