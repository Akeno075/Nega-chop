<template>
    <div> 
        <textarea :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value ?? '')" 
        @blur="$emit('blur')" 
        :class="['form-control',{ 'border-red-500' : error}]">

        </textarea>
        <span class="text-red-400" v-show="error">{{ error }}</span>

    </div>
</template>

<script setup lang="ts">
interface Props{
    modelValue: string | number;
    error?: string;
    type?: 'text' | 'number';

}
withDefaults(defineProps<Props>(), {
    type: 'text',
});

defineEmits(['update:modelValue', 'blur']);
</script>


<style scoped>
@reference "@/style.css";

.form-label {
    @apply block text-sm font-bold mb-2 text-white;
}

.form-control {
    @apply shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none bg-gray-50 text-gray-700
    h-32;
}
</style>