<script setup>
    const props = defineProps({
        link: String,
        icon: String,
        title: String
    });

    const link = "/openai/" + props.link;
    const icon = "bi-" + props.icon;
    const { title } = props; 

</script>

<template>
    <li class="nav-item md-w-100">
        <NuxtLink :to=link class="nav-link d-flex align-items-center mb-0 me-md-auto text-white text-decoration-none">
            <i class="bi pe-none me-2" :class="icon"></i>
            <span class="fs-6">{{ title }}</span>
        </NuxtLink>
    </li>
</template>

<style scoped>
    .nav-link {
        border-radius: 10px;
    }

    .router-link-active.router-link-exact-active:not(.logo-link) {
        color: rgba(33,37,41,var(--bs-bg-opacity,1)) !important;
        background-color: white !important;
    }

    .sidebar {
        height: 100vh;
        overflow: auto;
    }

    i {
        font-size: 1.5rem;
    }
</style>

