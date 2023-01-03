<script setup>
    useHead({
        title : "Home - Nuxt app",
        meta : [
            {
                name : "description",
                content : "This is a demo app for a Nuxt 3 app"
            }
        ]
    })

</script>

<template>
    <div class="index-container">
      <di class="text-center">
        <h1>Welcome to the index page</h1>
        <AppAlert>
          This is an auto-imported component
        </AppAlert>
      </di>
    </div>

    <!-- In Dev : Only works if image is in folder assets/ (which itself is located in the root of the Nuxt project) -->
    <!-- And if you've specified '~/assets' before the path of the image -->
    <!-- <img src="~/assets/img/house.jpg" alt="Discover Nuxt 3 assets"> -->
</template>

<style scoped>
  .index-container {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>