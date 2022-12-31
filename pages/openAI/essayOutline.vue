<template>
    <div class="row">
        <div class="col-12 col-md-5 order-3 order-md-1">
            <OpenAIForm link="essay-outline" />
        </div>

        <div class="col-1 d-none d-md-block text-center order-md-2">
            <div class="vr h-100 my-4"></div>
        </div>

        <div class="col-12 d-block d-md-none text-center order-2">
            <hr class="w-100 mx-auto" />
        </div>

        <div class="col-12 col-md-6 order-1 order-md-3">
            <h5 class="mt-3 text-secondary">
                Generate an outline for a research topic.
            </h5>
        
            <h2>
                Example :
            </h2>
        
            <div class="p-3 bg-light border rounded-3 example">
                Create an outline for an essay about Nikola Tesla and his contributions to technology: <br/>
 <br/>
                I. Introduction <br/>
                A. Who was Nikola Tesla? <br/>
                B. Overview of his contributions to technology <br/>
 <br/>
                II. Early Life and Education <br/>
                A. Where and when Tesla was born <br/>
                B. His education and early career <br/>
 <br/>
                III. Tesla's Contributions to Technology <br/>
                A. Alternating Current <br/>
                B. Radio and Remote Control <br/>
                C. Robotics <br/>
                D. X-Rays <br/>
 <br/>
                IV. Tesla's Later Years <br/>
                A. His later inventions <br/>
                B. His death and legacy <br/>
 <br/>
                V. Conclusion <br/>
                A. Summary of Tesla's life and accomplishments <br/>
                B. Impact of Tesla's work on modern technology <br/>
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