<template>
    <div class="row">
        <div class="col-12 col-md-5 order-3 order-md-1">
            <OpenAIForm link="interview"/>  
        </div>

        <div class="col-1 d-none d-md-block text-center order-md-2">
            <div class="vr h-100 my-4"></div>
        </div>

        <div class="col-12 d-block d-md-none text-center order-2">
            <hr class="w-100 mx-auto" />
        </div>

        <div class="col-12 col-md-6 order-1 order-md-3">
            <h5 class="mt-3 text-secondary">
                Create interview questions.
            </h5>
        
            <h2>
                Example :
            </h2>
        
            <div class="p-3 bg-light border rounded-3 example">
                Create a list of 8 questions for my interview with a science fiction author: <br/>
 <br/>
                1. What inspired you to write science fiction? <br/>
                2. What themes do you typically explore in your work? <br/>
                3. How has the genre of science fiction evolved over time? <br/>
                4. What do you think sets your work apart from other science fiction authors? <br/>
                5. What advice would you give to aspiring science fiction authors? <br/>
                6. What are some of the most challenging aspects of writing science fiction? <br/>
                7. How has your writing process changed over the years? <br/>
                8. What do you think is the most important thing for readers to take away from your work? <br/>
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