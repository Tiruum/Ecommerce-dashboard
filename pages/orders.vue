<template>
    <div class="flex md:gap-4 gap-0 transition-all">
        <div class="flex-none lg:w-64 sm:w-16 w-0"></div>
        <div class="sm:hidden fixed text-white bg-gray-800 w-10 h-10 top-3 left-3 rounded-full flex items-baseline justify-center text-3xl font-semibold cursor-pointer opacity-90">+</div>
        <div class="md:mr-8 md:mt-8 md:ml-4 md:mb-8 mr-2 mt-2 ml-2 mb-2 w-full h-fit text-gray-900 dark:text-white">
            <div class="mb-8">
                <h1 class="font-semibold text-3xl">Заказы 🧾</h1>
                <p class="text-base mt-2">Это страница заказов. На ней вы можете мониторить статусы заказов и изменять
                    их.</p>
            </div>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden rounded-xl">
                            <table class="min-w-full text-gray-800 dark:text-gray-200">
                                <thead class="bg-gray-200 dark:bg-gray-800 dark:border-gray-900 border-gray-200">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium px-6 py-4 text-left">
                                            ID
                                        </th>
                                        <th scope="col" class="text-sm font-medium px-6 py-4 text-left">
                                            Время
                                        </th>
                                        <th scope="col" class="text-sm font-medium px-6 py-4 text-left">
                                            Имя заказчика
                                        </th>
                                        <th scope="col" class="text-sm font-medium px-6 py-4 text-left">
                                            Email
                                        </th>
                                        <th scope="col" class="text-sm font-medium px-6 py-4 text-left">
                                            Телефон
                                        </th>
                                        <th scope="col" class="text-sm font-medium px-6 py-4 text-left">
                                            Товары
                                        </th>
                                        <th scope="col" class="text-sm font-medium px-6 py-4 text-left">
                                            Статус
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="order of orders" :key="order.id"
                                        class="even:bg-gray-100 odd:bg-gray-200 dark:even:bg-gray-700 dark:odd:bg-gray-800 border-b dark:border-gray-900 border-gray-200">
                                        <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            {{ order.id }}
                                        </td>
                                        <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            {{ new Date(order.creationtime).toLocaleString() }}
                                        </td>
                                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                                            {{ order.customername }}
                                        </td>
                                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                                            {{ order.email }}
                                        </td>
                                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                                            {{ order.phone }}
                                        </td>
                                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                                            <span class="after:content-[','] mr-1 last:after:content-none last:mr-0"
                                                v-for="product of order.selectedproducts" :key="product">{{ product }}
                                            </span>
                                        </td>
                                        <td :class="[order.status == 'Оплачено' ? 'text-green-500' : '', order.status == 'В ожидании' ? 'text-yellow-500' : '', order.status == 'Не оплачено' ? 'text-red-500' : '', ]"
                                            class="text-sm font-light px-6 py-4 whitespace-nowrap">
                                            {{ order.status }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Orders',
    data() {
        return {
            orders: []
        }
    },
    mounted() {
        this.$nextTick(async function () {
            try {
                const response = await this.$axios.get('/api/orders')
                this.orders = response.data
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
