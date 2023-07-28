<template>
    <div class="flex md:gap-4 gap-0 transition-all">
        <div class="flex-none lg:w-64 sm:w-16 w-0"></div>
        <div
            class="sm:hidden fixed text-white bg-gray-800 w-10 h-10 top-3 left-3 rounded-full flex items-baseline justify-center text-3xl font-semibold cursor-pointer opacity-90">
            +</div>
        <div class="md:mr-8 md:mt-8 md:ml-4 md:mb-8 mr-2 mt-2 ml-2 mb-2 w-full h-fit text-gray-900 dark:text-white">
            <div class="mb-8">
                <h1 class="font-semibold text-3xl">Планирование ✅</h1>
                <p class="text-base mt-2">Это страница планирования. Здесь вы можете планировать добавление или удаление заказов.</p>
            </div>
            <span>Здесь пока ничего нет</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Kanban',
}

</script>

<style scope>
</style>