<script setup>
    const input = ref("");
    const response = ref(null);

    const formSubmit = async (e) => {
        e.preventDefault();

        try {
            await $fetch('/api/image-generate', { method: 'POST', body: JSON.stringify({ prompt: input.value }) })
                .then( res => {
                    console.log(res);
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
        Enter prompt to generate an image
    </h1>

    <form @submit="formSubmit">
        <div class="mb-3">
            <textarea rows="5" class="form-control" id="text-field" placeholder="Enter text" v-model="input"></textarea>
        </div>

        <button type="submit" class="btn btn-success mb-3">Submit</button>
    </form>

    <div id="response" class="p-3 border rounded-3 response" v-if="response">
        <img :src="response" alt="Image généré par IA">
    </div>
</template>


<style scoped>
    .response {
        max-height: 60vh;
        overflow: auto;
    }
</style>
