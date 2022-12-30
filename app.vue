<script setup>
  import "./node_modules/bootstrap/dist/css/bootstrap.min.css"
  import "./node_modules/bootstrap-icons/font/bootstrap-icons.css"
  // auto import of useRuntimeConfig & useAppConfig
  const runtimeConfig = useRuntimeConfig()

  const appConfig = useAppConfig()
</script>

<template>
  <div>

    <!-- <NuxtWelcome /> -->

    <AppHeader/>

    <main class="container">
      <NuxtPage />
    </main>

  </div>
</template>
