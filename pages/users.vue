<template>
    <div class="flex md:gap-4 gap-0 transition-all">
        <div class="flex-none lg:w-64 sm:w-16 w-0">
            <div v-if="isAddModal" class="z-1 font-light">
                <div @click="hideAddModal" class="fixed bg-black opacity-50 w-screen h-screen z-2"></div>
                <div class="rounded-xl bg-gray-800 p-8 z-10 absolute top-0 right-0 bottom-0 left-0 m-auto lg:w-1/3 md:w-1/2 w-full h-fit">
                    <h1 class="text-2xl text-gray-900 dark:text-white mb-6 text-center">Добавить пользователя</h1>
                    <form @submit.prevent="addUser" class="w-full flex flex-col">
                        <label for="name" class="text-gray-900 dark:text-white">Имя</label>
                        <input type="text" v-model="form.name" class="mt-1 inpt bg-white dark:bg-dark-700" id="name">
                        
                        <label for="email" class="mt-2 text-gray-900 dark:text-white">Email</label>
                        <input type="email" v-model="form.email" class="inpt" id="email">
                        
                        <label for="status" class="mt-2 text-gray-900 dark:text-white">Статус</label>
                        <select v-model="form.status" class="inpt rounded-md px-1 py-0.5">
                            <option value="admin">Администратор</option>
                            <option value="editor">Редактор</option>
                        </select>
                        <button
                            class="mt-4 px-2 py-1 rounded-md border border-green-500 text-white mb-1 cursor-pointer hover:bg-green-500 transition-all">Добавить
                            пользователя</button>
                    </form>
                </div>
            </div>
        </div>
        <div
            class="sm:hidden fixed text-white bg-gray-800 w-10 h-10 top-3 left-3 rounded-full flex items-baseline justify-center text-3xl font-semibold cursor-pointer opacity-90">
            +</div>
        <div class="md:mr-8 md:mt-8 md:ml-4 md:mb-8 mr-2 mt-2 ml-2 mb-2 w-full h-fit text-gray-900 dark:text-white">
            <div class="mb-8">
                <h1 class="font-semibold text-3xl">Пользователи 👨</h1>
                <p class="text-base mt-2">Это страница пользователей. Здесь вы можете добавлять или удалять
                    пользователей и назначать им роли.</p>
            </div>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <button @click="showAddModal"
                            class="px-1 py-0.5 rounded-md border border-green-500 text-white font-light mb-1 cursor-pointer hover:bg-green-500 transition-all">Добавить
                            пользователя</button>
                        <div class="overflow-hidden rounded-xl">
                            <table class="min-w-full text-gray-800 dark:text-gray-200">
                                <thead class="bg-gray-200 dark:bg-gray-800 dark:border-gray-900 border-gray-200">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium px-6 py-4 text-left">
                                            ID
                                        </th>
                                        <th scope="col" class="text-sm font-medium px-6 py-4 text-left">
                                            Имя
                                        </th>
                                        <th scope="col" class="text-sm font-medium px-6 py-4 text-left">
                                            Email
                                        </th>
                                        <th scope="col" class="text-sm font-medium px-6 py-4 text-left">
                                            Статус
                                        </th>
                                        <th scope="col" class="text-sm font-medium px-6 py-4 text-left">
                                            Действия
                                        </th>
                                    </tr>
                                </thead>
                                <tbody v-for="user of users" :key="user.id"
                                    class="odd:bg-gray-100 even:bg-gray-200 dark:odd:bg-gray-700 dark:even:bg-gray-800">
                                    <tr class="border-b dark:border-gray-900 border-gray-200">
                                        <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            {{ user.id }}
                                        </td>
                                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                                            {{ user.name }}
                                        </td>
                                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                                            {{ user.email }}
                                        </td>
                                        <td class="text-sm font-light px-6 py-4 whitespace-nowrap">
                                            {{ user.status == 'admin' ? 'Администратор' : 'Редактор' }}
                                        </td>
                                        <td
                                            class="text-sm font-light px-6 py-4 whitespace-nowrap">
                                            <button @click="editUser(user.id)"
                                                class="px-1 py-0.5 rounded-md border border-green-500 text-white cursor-pointer hover:bg-green-500 transition-all">Редактировать</button>
                                            <button @click="deleteUser(user.id)"
                                                class="px-1 py-0.5 rounded-md bg-red-500 text-white cursor-pointer">Удалить</button>
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
    name: 'Users',
    data() {
        return {
            users: [],
            isAddModal: false,
            form: {
                name: '',
                email: '',
                status: 'admin'
            }
        }
    },
    methods: {
        editUser(id) {
            console.log(id);
        },
        async deleteUser(id) {
            const ask = confirm('Вы уверены, что ходите удалить пользователя ' + id + '?')
            if (ask) {
                const response = await this.$axios.delete(`/api/users/${id}`)
                this.users = this.users.filter(function(user) {
                    return user.id !== id
                })
            }
        },
        showAddModal() {
            this.isAddModal = true
        },
        hideAddModal() {
            this.isAddModal = false
        },
        async addUser() {
            const { name, email, status } = this.form
            const response = await this.$axios.post('/api/users', { name: name, email: email, status: status })
            this.form.name = ''
            this.form.email = ''
            this.isAddModal = false
            console.log(response.data);
            this.users.push(response.data)
        }
    },
    mounted() {
        this.$nextTick(async function () {
            try {
                const response = await this.$axios.get('/api/users')
                this.users = response.data
            } catch (err) {
                console.log(err)
            }
        })
    }
}
</script>

<style scope>
</style>