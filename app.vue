<script setup>
  // auto import of useRuntimeConfig & useAppConfig
  const runtimeConfig = useRuntimeConfig()

  const appConfig = useAppConfig()
</script>

<template>
  <div>
    
    <!-- <div>
      <h1>Welcome to the homepage</h1>
      <AppAlert>
        This is an auto-imported component.
      </AppAlert>
    </div> -->

    <!-- <NuxtWelcome /> -->

    <NuxtPage />

    <!-- In Dev : Only works if image is in folder assets/ (which itself is located in the root of the Nuxt project) -->
    <!-- And if you've specified '~/assets' before the path of the image -->
    <img src="~/assets/img/house.jpg" alt="Discover Nuxt 3 assets">

  </div>
</template>
