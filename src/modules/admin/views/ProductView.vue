<template>
    <div class="bg-white px-5 py-2 rounded border">
        <h1 class="text-3xl">Producto: <small class="text-blue-500">nombre</small></h1>
        <hr class="my-4" />
    </div>

    <form  @submit="onSubmit" class="grid grid-cols-1 sm:grid-cols-2 bg-black px-5 gap-5 border rounded-lg shadow-md mt-4">

        <div class="first-col">
            <!-- Primera parte del formulario -->
            <div class="mb-4">
                <label for="title" class="form-label ">
                    Título
                </label>
               <CustomInput v-model="title" v-bind="titleAttrs" :error="errors.title" />
            </div>

            <div class="mb-4">
                <label for="slug" class="form-label ">Slug</label>
                <CustomInput v-model="slug" v-bind="slugAttrs" :error="errors.slug" />
            </div>

            <div class="mb-4">
                <label for="description" class="form-label ">Descripción</label>
                <CustomTextArea v-model="description" v-bind="descriptionAttrs" :error="errors.description"></CustomTextArea>
            </div>

            <div class="flex flex-row gap-3">
                <div class="mb-4">
                    <label for="price" class="form-label ">Precio</label>
                    <CustomInput v-model="price" v-bind="priceAttrs" :error="errors.price" type="number" />
                </div>

                <div class="mb-4">
                    <label for="stock" class="form-label ">Inventario</label>
                    <CustomInput v-model="stock" v-bind="stockAttrs" :error="errors.stock" type="number" />
                </div>
            </div>

            <div>
                <label for="sizes" class="form-label ">Tallas</label>
                <div class="flex flex-wrap gap-2">
                    <button v-for="size of allSizes" key="size" @click="toggleSize(size)" type="button"
                        :class="['  border border-gray-600 rounded px-4  py-2 hover:bg-gray-700 ', 'p-2 rounded w-14 mr-2 flex-1',
                        {
                            'bg-gray-800 text-white':hasSize(size),
                            'bg-red-100 text-gray-800': !hasSize(size),
                        }] ">
                        {{ size }}
                    </button>
                </div>
            </div>
        </div>

        <!-- Segunda columna -->
        <div class="first-col">
            <label for="stock" class="form-label ">Imágenes</label>
            <!-- Row with scrollable horizontal -->
            <div class="flex p-2 overflow-x-auto space-x-8 w-full h-[265px] bg-gray-200 rounded">
                <div  v-for="image of images" key="image.value" class="flex-shrink-0">
                    <img :src="image.value" alt="title" class="w-[250px] h-[250px] rounded" />
                </div>

               
            </div>

            <!-- Upload image -->
            <div class="col-span-2 my-4">
                <label for="image" class="form-label ">Subir imagen</label>
                <input multiple type="file" id="image"
                    class="form-control bg-black  border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file: rounded" />
                <p class="text-xs text-gray-300 mt-2 mb-5">PNG, JPG, SVG, WEBP, and GIF are Allowed.</p>
            </div>

            <div class="mb-4">
                <label for="gender" class="form-label ">Género</label>
                <select v-model="gender" v-bind="genderAttrs" 
                    class="form-control bg-gray-800 border border-gray-600 ">
                    <option value="">Seleccione</option>
                    <option value="kid">Niño</option>
                    <option value="women">Mujer</option>
                    <option value="men">Hombre</option>
                </select>
                <span v-if="errors.gender" v-show="errors.gender" class="text-red-500 ">{{ errors.gender }}</span>
            </div>

            <!-- Botón para guardar -->
            <div class="my-4 text-right">
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Guardar
                </button>
            </div>
        </div>
    </form>

    <div class="grid grid-cols-2 gap-4 mt-4 bg-black p-5 rounded-lg">
        <pre  class="bg-blue-200 p-2 rounded text-black">
            {{ JSON.stringify(values, null, 2) }}
        </pre>
        <pre class="bg-red-200 p-2 rounded text-black">
            {{ JSON.stringify(errors, null, 2) }}
        </pre>
        <pre class="bg-green-200 p-2 col-span-2 rounded text-black">
            {{ JSON.stringify(meta, null, 2) }}
        </pre>
    </div>

</template>

<script src="./ProductView.ts" lang="ts">
</script>

    <style scoped>
    @reference "@/style.css";

    .form-label {
        @apply block text-sm font-bold mb-2 text-white;
    }

    .form-control {
        @apply shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none bg-gray-50 text-black;
    }
    </style>
