<template>
    <div class="row">
        <div class="col-12 col-md-5 order-3 order-md-1">
            <OpenAIForm link="js-to-python" />
        </div>

        <div class="col-1 d-none d-md-block text-center order-md-2">
            <div class="vr h-100 my-4"></div>
        </div>

        <div class="col-12 d-block d-md-none text-center order-2">
            <hr class="w-100 mx-auto" />
        </div>

        <div class="col-12 col-md-6 order-1 order-md-3">
            <h5 class="mt-3 text-secondary">
                Convert simple JavaScript expressions into Python.
            </h5>
        
            <h2>
                Example :
            </h2>
        
            <div class="p-3 bg-light border rounded-3 example">
                #JavaScript to Python: <br/>
                JavaScript:  <br/>
                dogs = ["bill", "joe", "carl"] <br/>
                car = [] <br/>
                dogs.forEach((dog) { <br/>
                    car.push(dog); <br/>
                }); <br/>
 <br/>
                Python: <br/>
                dogs = ["bill", "joe", "carl"] <br/>
                car = [] <br/>
                for dog in dogs: <br/>
                    car.append(dog) <br/>
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