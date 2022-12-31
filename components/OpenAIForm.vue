<script setup>
    import axios from 'axios';

    const runtimeConfig = useRuntimeConfig();

    const { apiUrl } = runtimeConfig.public;

    const props = defineProps({
        link: String
    });

    const response = ref(null);

    const getResponse = async (prompt, link) => {

        const data = {
            prompt
        };

        try {
            await axios.post(`${apiUrl}/api/openai/${link}`, data)
                .then( res => {
                    response.value = res.data
                })
                .catch( err => {
                    console.log(err)
                })

        } catch (error) {
            console.error(error)
        }
    }

    const { link } = props;

    const formSubmit = (e) => {
        e.preventDefault();
        getResponse(e.target[0].value, link);
    }
</script>

<template>
    <h1 class="text-center">
        Enter text
    </h1>

    <form @submit="formSubmit">
        <div class="mb-3">
            <textarea class="form-control" id="text-field" placeholder="Enter text"></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <div id="response">{{ response }}</div>
</template>