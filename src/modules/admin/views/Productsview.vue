<template>
<div class="bg-black px-5 py-6 rounded-lg shadow-md">
    <h1 class="text-3xl lg font-semibold text-white">Productos</h1>

    <div class=" py-8 w-full">
  <div class="shadow overflow-hidden rounded border-b border-gray-200">
    <table class="min-w-full bg-white">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th class="w-10 text-left py-3 px-4 uppercase font-semibold text-sm">Imagen</th>
          <th class=" text-left py-3 px-4 uppercase font-semibold text-sm">Titulo</th>
          <th class="w-28 text-left py-3 px-4 uppercase font-semibold text-sm">Precio</th>
          <th class="w-60 text-left py-3 px-4 uppercase font-semibold text-sm">Tallas</th>
        </tr>
      </thead>
    <tbody class="text-gray-700">
      <tr v-for="(product,index) in products" :key="product.id" 
      :class="{
        'bg-green-300': index % 2 === 0,
        'bg-blue-200': index % 2 !== 0
      }">
        <td class=" text-left py-3 px-4"><img :src="product.images[0]" 
            :alt="product.title" class="w-20 h-20 object-cover rounded" /></td>
        <td class=" text-left py-3 px-4">
            <RouterLink :to="`/admin/products/${product.id}`" 
            class="hover:text-blue-500 hover:underline">{{ product.title }}</RouterLink>    
        </td>
        <td class="text-left py-3 px-4">
            <span class="bg-blue-500 text-white py-1 px-2 rounded-full"> ${{ product.price }}</span>
           </td>
        <td class="text-left py-3 px-4">{{ product.sizes.join(', ') }}</td>
      </tr>
   
    </tbody>
    </table>
  </div>
</div>
</div>


   <!-- component -->

   <ButtonNavegation 
   :is-first-page="page === 0"
    :page="page"
    :has-more-data="!!products && products.length < 10"
   ></ButtonNavegation>

</template>

<script setup lang="ts">
import ButtonNavegation from '@/modules/common/components/ButtonNavegation.vue';
import { usePagination } from '@/modules/common/composables/usePagination';
import { getProducts } from '@/modules/products/actions';
import { useQuery, useQueryClient } from '@tanstack/vue-query';
import { watchEffect } from 'vue';


const queryClient = useQueryClient();
const {page} =usePagination();

const {data: products = []} = useQuery({
  queryKey: ['products', {page: page}],
  queryFn: () => getProducts(page.value), 
});

watchEffect(
	()=> {
		queryClient.prefetchQuery({
			queryKey: ['products', {page: page.value+1}],
			queryFn: () => getProducts(page.value+1),

		})
	}
)
</script>   
<style scoped>

</style>