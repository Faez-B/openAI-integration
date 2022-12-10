<script setup>
    const route = useRoute()
    const { id } = route.params
</script>

<template>
    <h1>
        Post {{ id }}
    </h1>
</template>