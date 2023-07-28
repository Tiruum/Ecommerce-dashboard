<template>
    <div>
        <div class="top-1 right-1 absolute">
            <div v-if="$route.query.message" class="text-center p-4 rounded-xl bg-red-500 text-white">
                Сначала нужно зарегистрироваться
            </div>
            <div v-if="this.incorrect" class="text-center p-4 rounded-xl bg-red-500 text-white">
                Неправильный логин или пароль
            </div>  
        </div>
        
        <div class="absolute left-0 top-0 right-0 bottom-0 m-auto w-1/2 lg:w-1/4 h-fit rounded-xl bg-gray-800 p-4">
            <h1 class="w-full text-center text-white text-xl mb-2">Добро пожаловать!</h1>
            <form @submit.prevent="onSubmit" class="flex flex-col">
                <input v-model="login" value="login" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                <input v-model="password" value="password" type="password" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                <button type="submit" class="mt-2 border border-green-500 px-3 py-2 rounded-md shadow-sm hover:bg-green-500 text-white transition-all">Войти</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'empty',
        name: 'Login',
        props: [''],
        components: {
            
        },
        data() {
            return {
                login: '',
                password: '',
                incorrect: false
            }
        },
        methods: {
            onSubmit() {
                console.log('Submit');
            }
        },
    }

</script>

<style scope>

</style>