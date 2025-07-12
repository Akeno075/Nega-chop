<template>
  <!-- component -->
  <div class="bg-gray-100 flex justify-center items-center h-screen">
    <!-- Left: GIF -->
    <div class="w-1/2 h-screen hidden lg:block">
      <img
        :src="negaGif"
        alt="Nega GIF"
        class="object-cover w-full h-full"
      />
    </div>
    <!-- Right: Login Form -->
    <div class="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import negaGif from '@/components/imgs/regis-negas.gif'
</script>

<style scoped>
</style>
