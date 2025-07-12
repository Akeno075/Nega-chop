<template>
  <h1 class="text-2xl font-semibold mb-4">Registro Nueva Cuenta</h1>
  <form @submit.prevent="onRegister">
    <!-- Username Input -->
    <div class="mb-4">
      <label for="name" class="block text-gray-600">Nombre</label>
      <input
        v-model="myForm.fullName"
        type="text"
        id="name"
        name="name"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>

    <!-- Username Input -->
    <div class="mb-4">
      <label for="email" class="block text-gray-600">Correo Electronico</label>
      <input
      v-model="myForm.email"
        type="text"
        id="email"
        name="email"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Password Input -->
    <div class="mb-4">
      <label for="password" class="block text-gray-600">Contraseña</label>
      <input
        v-model="myForm.password"
        type="password"
        id="password"
        name="password"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Forgot Password Link -->
    <div class="mb-6 text-black-500">
      <a href="#" class="hover:underline">¿Olvidaste tu contraseña?</a>
    </div>
    <!-- Login Button -->
   <button
  type="submit"
  class="bg-black hover:bg-gray-800 text-white font-semibold rounded-md py-2 px-4 w-full"
>
  Crear Cuenta
</button>

  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-black-500 text-center">
    <RouterLink :to="{ name: 'login' }" class="hover:underline">Iniciar Sesión </RouterLink>
  </div>
</template>


<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStores } from '../stores/auth.stores';
import { useToast } from 'vue-toastification';

const router = useRouter();
const authStore = useAuthStores();
const toast= useToast();

const myForm =reactive({
  fullName: '',
  email:'',
  password:'',
});

const onRegister = async () => {
  const {ok,message}=await authStore.register(myForm.fullName, myForm.email, myForm.password);

   if(ok) return;
  toast.error(message);

};


</script>