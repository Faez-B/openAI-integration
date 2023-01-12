<script setup>
    const props = defineProps({
        params: Object
    });

    const { params } = props;

    const input = ref("");
    const response = ref(null);

    const formSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await $fetch('/api/generate', { method: 'POST', body: JSON.stringify({ prompt : input.value, otherParams : params }) })
                .then( res => {
                    response.value = res;
                })
                .catch( err => {
                    console.log(err)
                })
            ;
        } catch (error) {
            console.error(error)
        }
    }
</script>

<template>
    <h1>
        Enter text
    </h1>

    <form @submit="formSubmit">
        <div class="mb-3">
            <textarea rows="5" class="form-control" id="text-field" placeholder="Enter text" v-model="input"></textarea>
        </div>

        <button type="submit" class="btn btn-success mb-3">Submit</button>
    </form>

    <h5 v-if="response">
        Answer :
    </h5>

    <div id="response" class="p-3 border rounded-3" v-if="response">
        {{ response }}
    </div>
</template>

