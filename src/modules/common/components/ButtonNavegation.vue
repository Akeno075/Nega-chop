<template>
    <div class="flex justify-center py-10 bg-gray-100 space-x-5">
        <button 
        :disabled="isFirstPage" @click="$router.push ({ query: { page: page - 1}})"
        
        class="flex items-center space-x-1.5 bg-blue-500 disabled:bg-gray-300 rounded-lg px-4 py-1 text-white hover:bg-blue-600
        transition-all ">
            <ArrowLeft> </ArrowLeft>
            <span>Anterior</span>

        </button>

        <button 
        :disabled="hasMoreData" @="$router.push ({ query: { page: page + 1}})"
        class="flex items-center space-x-1.5 bg-blue-500 disabled:bg-gray-300 rounded-lg px-4 py-1 text-white hover:bg-blue-600
        transition-all">
            <span>Siguiente</span>
<ArrowRight></ArrowRight>
        </button>
    </div>

    
</template>

<script setup lang="ts">
import ArrowLeft from '@/icon/ArrowLeft.vue';
import ArrowRight from '@/icon/ArrowRight.vue';


interface Props {
    page:number,
    isFirstPage:boolean,
    hasMoreData:boolean,
}

defineProps<Props>();


</script>

<style scoped>

</style>