<script setup>
    const props = defineProps({
        link: String
    });

    const { link } = props;

    const input = ref("");
    const response = ref(null);

    const getResponse = async (prompt, link) => {
        try {
            await $fetch(`/api/openai/${link}`, { method: 'post', body: { prompt } })
                .then( res => {
                    response.value = res;
                    // console.log(res);
                    // console.log(res.data);
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
        // getResponse(e.target[0].value, link);
        getResponse(input.value, link);
    }
</script>

<template>
    <h1 class="text-center">
        Enter text
    </h1>

    <form @submit="formSubmit">
        <div class="mb-3">
            <textarea class="form-control" id="text-field" placeholder="Enter text" v-model="input"></textarea>
        </div>

        <button type="submit" class="btn btn-success mb-3">Submit</button>
    </form>

    <div id="response" class="p-3 border rounded-3" v-if="response">
        {{ response }}
    </div>
</template>

