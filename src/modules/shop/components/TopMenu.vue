<template>
    <div>

  <!-- Header Navbar -->
<nav class="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4">
  <div class="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
    <a href="#" class="flex items-center">
       <img :src="logo" alt="Logo Nega-Chop" class="mr-3 h-6 sm:h-9" />

      <span class="self-center whitespace-nowrap text-xl font-semibold">Nega-Chop</span>
    </a>
    <div class="mt-2 sm:mt-0 sm:flex md:order-2">
      
      
<!-- TEMPLATE PARA SI NO ESTA AUTENTIFICADO -->
      <template v-if="!authStore.isAunthenticated">
        <!-- Login Button -->
<RouterLink 
  to="/auth/login" 
  type="button" 
  class="mr-3 hidden border border-black py-1.5 px-6 text-center text-sm font-medium text-black focus:outline-none focus:ring-4 focus:ring-gray-500 md:inline-block rounded-lg">
  Iniciar Sesión</RouterLink>
  <!-- Register Button -->
<RouterLink 
  to="/auth/register" 
  type="button" 
  class="mr-3 hidden bg-black py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-500 md:mr-0 md:inline-block rounded-lg">
  Registrarse</RouterLink>
      </template>

<!-- TEMPLATE PARA SI  ESTA AUTENTIFICADO -->
      <template v-if="authStore.isAunthenticated">
        <!-- Login Button -->
<RouterLink  v-if="authStore.isAdmin"
  to="/admin" 
  type="button" 
  class="mr-3 hidden border border-black py-1.5 px-6 text-center text-sm font-medium text-black focus:outline-none focus:ring-4 focus:ring-gray-500 md:inline-block rounded-lg">
  Admin</RouterLink>
  <!-- Register Button -->
<button 
  @click="authStore.logout()"
  type="button" 
  class="mr-3 hidden bg-black py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-500 md:mr-0 md:inline-block rounded-lg">
  Cerrar Sesión</button>
      </template>


      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
    <div class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-sticky">
      <ul class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
        <li>
          <a href="#" class="block rounded bg-black py-2 pl-3 pr-4 text-white font-bold md:bg-transparent md:p-0 md:text-black md:font-bold" aria-current="page"> Home</a>
        </li>
        <li>
          <a href="#" class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">About</a>
        </li>
        <li>
          <a href="#" class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">Services</a>
        </li>
        <li>
          <a href="#" class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
</template>

<script setup lang="ts">
//importar una imagen con Vue para colocacion mas sencilla
import logo from '@/components/imgs/Icon-negas.png';
import { useAuthStores } from '@/modules/auth/stores/auth.stores';

const  authStore= useAuthStores();

</script>

<style scoped>

</style>