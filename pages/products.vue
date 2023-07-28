<template>
    <div class="flex md:gap-4 gap-0 transition-all">
        <div class="flex-none lg:w-64 sm:w-16 w-0"></div>
        <div
            class="sm:hidden fixed text-white bg-gray-800 w-10 h-10 top-3 left-3 rounded-full flex items-baseline justify-center text-3xl font-semibold cursor-pointer opacity-90">
            +</div>
        <div class="md:mr-8 md:mt-8 md:ml-4 md:mb-8 mr-2 mt-2 ml-2 mb-2 w-full h-fit text-gray-900 dark:text-white">
            <div class="mb-4">
                <h1 class="font-semibold text-3xl">Товары 🛍</h1>
                <p class="text-base mt-2">Это страница товары. На ней вы можете добавлять, редактировать и удалять
                    товары</p>
            </div>
            <nuxt-link to="/addproduct">
                <div
                    class="w-full my-4 border border-dashed dark:border-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-900 border-gray-400 hover:bg-gray-400 hover:text-white transition-all p-3 rounded-full cursor-pointer">
                    <h1 class="text-center">+ Добавить товар</h1>
                </div>
            </nuxt-link>
            <div class="grid grid-cols-12 md:gap-6 gap-2">
                <div class="lg:col-span-4 md:col-span-6 col-span-12" v-for="product of products" :key="product.id">
                    <Card :product="product" @editProduct="editProduct" @deleteProduct="deleteProduct" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
    name: 'Products',
    data() {
        return {
            products: null
        }
    },
    methods: {
        editProduct(id) {
            console.log(id);
        },
        async deleteProduct(id) {
            const ask = confirm('Вы уверены, что хотите удалить продукт ' + id + '?')
            if (ask) {
                const response = await this.$axios.delete(`/api/products/${id}`)
                this.products = this.products.filter(function (products) {
                    return products.id !== id
                })
            }
        },
    },
    mounted() {
        this.$nextTick(async function () {
            try {
                const response = await this.$axios.get('/api/products')
                this.products = response.data
                console.log(response.data)
            } catch (err) {
                console.log(err)
            }
        })
    }
}


</script>

<style scope>
</style>