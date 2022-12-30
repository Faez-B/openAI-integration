<script setup>

</script>

<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar">

        <div class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <i class="bi bi-robot pe-none me-2"></i>
            <span class="fs-4">Open AI</span>
        </div>

        <hr>

        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <NuxtLink to="/openai/q_a" class="nav-link d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <i class="bi bi-patch-question pe-none me-2"></i>
                <span class="fs-4">Q&A</span>
            </NuxtLink>
          </li>
        </ul>

    </div>
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
    }

    i {
        font-size: 1.5rem;
    }
</style>