<script setup>
  // auto import of useRuntimeConfig & useAppConfig
  const runtimeConfig = useRuntimeConfig()

  const appConfig = useAppConfig()
</script>

<template>
  <div>
    
    <div>
      <h1>Welcome to the homepage</h1>
      <AppAlert>
        This is an auto-imported component.
      </AppAlert>
    </div>

    <NuxtWelcome />

  </div>
</template>
