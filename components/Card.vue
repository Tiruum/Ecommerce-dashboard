<template>
    <div class="rounded-xl px-6 py-2 bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 overflow-auto text-gray-900 dark:text-gray-200">
        <div class="mt-4 bg-gray-200 dark:bg-gray-700 w-full min-h-80 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden group-hover:opacity-75 lg:aspect-square md:aspect-none">
            <img class="w-full h-full object-center object-cover rounded-xl" :src="product.images[0].src" :alt="product.images[0].alt">
        </div>
        <div class="mt-4">
            <h1 class="text-gray-900 dark:text-white font-bold text-xl">{{ product.title }}</h1>
            <h5 class="font-semibold text-sm text-green-500">{{ product.price }}₽</h5>
        </div>
        <div class="mt-2 w-full flex flex-row items-center">
            <div v-for="color in product.colors" :key="color.name" class="w-5 h-5 rounded-full mr-1 last:mr-0 border border-gray-400 dark:border-none"
                :style="{ 'background': 'linear-gradient(135deg, ' + color.style[0] + ' 50%, ' + color.style[1] + ' 50%)'}">
            </div>
        </div>
        <div class="mt-2 w-full flex flex-row items-center">
            <div v-for="size in product.sizes" :key="size.name" :class="[size.inStock ? 'dark:border-gray-600 border-gray-400 cursor-pointer' : 'dark:border-gray-700 border-gray-200 text-gray-400 cursor-not-allowed']"
                class="flex items-center justify-center w-10 h-10 rounded-md mr-1 last:mr-0 border">
                {{ size.name }}
            </div>
        </div>
        <div class="flex flex-row mt-2">
            <div v-for="tag in product.tags" :key="tag" class="rounded-full text-xs text-gray-400 border border-gray-400 px-1 mr-1 last:mr-0">
                {{ tag }}
            </div>
        </div>
        <div class="text-xs mt-2 text-gray-400">
            <p>{{ product.description }}</p>
            <p>{{ product.details }}</p>
        </div>
        <div class="mt-4 mb-4 flex w-full justify-between items-center">
            <button
            @click="$emit('editProduct', product.id)"
            class="uppercase border border-green-500 px-2 py-1 h-8 text-gray-900 dark:text-white font-base text-sm rounded-full hover:bg-green-500 hover:text-white transition-all">Редактировать</button>
            <button
            @click="$emit('deleteProduct', product.id)"
            class="uppercase bg-red-500 px-2 py-1 h-8 text-white font-base text-sm rounded-full">Удалить</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {product: Object},
        components: {
            
        },
        data() {
            return {
                
            }
        },
        methods: {
            
        },
    }

</script>

<style scope>

</style>