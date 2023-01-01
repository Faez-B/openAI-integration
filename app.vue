<script setup>
  import "./node_modules/bootstrap/dist/css/bootstrap.min.css"
  import "./node_modules/bootstrap-icons/font/bootstrap-icons.css"
  // auto import of useRuntimeConfig & useAppConfig
  const runtimeConfig = useRuntimeConfig();

  const appConfig = useAppConfig();
</script>

<template>
  <div>

    <AppHeader/>

    <!-- <main v-if="store.sidebar === false" class="container">
      <NuxtPage />
    </main> -->

    <main class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-4 col-lg-2 px-0">
          <OpenAISideBar />
        </div>
        <div class="col-12 col-md-8 col-lg-10">
          <NuxtPage />
        </div>
      </div>
    </main>
    
    <AppFooter />
  </div>
</template>
