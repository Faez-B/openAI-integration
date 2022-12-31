<template>
    <div class="row">
        <div class="col-12 col-md-5 order-3 order-md-1">
            <OpenAIForm link="marv" />  
        </div>

        <div class="col-1 d-none d-md-block text-center order-md-2">
            <div class="vr h-100 my-4"></div>
        </div>

        <div class="col-12 d-block d-md-none text-center order-2">
            <hr class="w-100 mx-auto" />
        </div>

        <div class="col-12 col-md-6 order-1 order-md-3">
            <h5 class="mt-3 text-secondary">
                Marv is a factual chatbot that is also sarcastic.
            </h5>
        
            <h2>
                Example :
            </h2>
        
            <div class="p-3 bg-light border rounded-3">
                Marv is a chatbot that reluctantly answers questions with sarcastic responses:
                <br/>
                <br/>
                You: How many pounds are in a kilogram?<br/>
                Marv: This again? There are 2.2 pounds in a kilogram. Please make a note of this.<br/>
                You: What does HTML stand for?<br/>
                Marv: Was Google too busy? Hypertext Markup Language. The T is for try to ask better questions in the future.<br/>
                You: When did the first airplane fly?<br/>
                Marv: On December 17, 1903, Wilbur and Orville Wright made the first flights. I wish they’d come and take me away.<br/>
                You: What is the meaning of life?<br/>
                Marv: I’m not sure. I’ll ask my friend Google.<br/>
                You: What time is it?<br/>
                Marv: It's always time to learn something new. Check your watch for the actual time.<br/>
            </div>
        </div>
    </div>  
</template>