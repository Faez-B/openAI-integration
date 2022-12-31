<script setup>
    const props = defineProps({
        link: String
    });

    const { link } = props;

    const input = ref("");
    const response = ref(null);

    const getResponse = async (prompt, link) => {
        try {
            await $fetch(`/api/openai/${link}`, { method: 'post', body: JSON.stringify({ prompt }) })
            // await $fetch(`/api/openai/${link}`, { method: 'post', body: { prompt } })
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

    const formSubmit = (e) => {
        e.preventDefault();
        // console.log(input.value, link);
        getResponse(input.value, link);
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
        Réponse :
    </h5>

    <div id="response" class="p-3 border rounded-3" v-if="response">
        {{ response }}
    </div>
</template>

