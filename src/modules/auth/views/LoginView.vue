<template>
  <h1 class="text-2xl font-semibold mb-4">Login</h1>
  <form @submit.prevent="onLogin">
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
    <!-- Remember Me Checkbox -->
    <div class="mb-4 flex items-center">
      <input 
      v-model="myForm.rememberMe"
      type="checkbox" id="remember" name="remember" class="text-black-500" />
      <label for="remember" class="text-gray-600 ml-2">Recordar Usuario</label>
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
  Ingresar
</button>

  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-black-500 text-center">
    <RouterLink :to="{ name: 'register' }" class="hover:underline">Nueva Cuenta</RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStores } from '../stores/auth.stores';
import { useToast } from 'vue-toastification';

const router = useRouter();
const authStore = useAuthStores();
const toast= useToast();

const myForm =reactive({
  email:'',
  password:'',
  rememberMe:false
})

const onLogin = async () => {
  const ok=await authStore.login(myForm.email, myForm.password);

if (myForm.rememberMe){
  localStorage.setItem('email',myForm.email);
}else{
  localStorage.removeItem('email');
}

   if(ok) return;
  toast.error('Error al iniciar sesión, verifique sus credenciales');
};

watchEffect(()=>{
  const email= localStorage.getItem('email');
  if(email){
    myForm.email=email;
    myForm.rememberMe=true;
  }
});
</script>
