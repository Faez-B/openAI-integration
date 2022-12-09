<script setup>
  // auto import of useRuntimeConfig & useAppConfig
  const runtimeConfig = useRuntimeConfig()

  const appConfig = useAppConfig()
</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
