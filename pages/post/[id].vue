<script setup>
    // import { useRoute } from 'vue-router'
    const route = useRoute()
    const { id } = route.params
    console.log(id)
</script>

<template>
    <h1>
        Post {{ id }}
    </h1>
</template>