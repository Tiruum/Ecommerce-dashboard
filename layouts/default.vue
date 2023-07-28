<template>
    <div class="bg-gray-100 dark:bg-gray-900 h-full min-h-screen relative overflow-auto">
        <Sidebar />
        <Nuxt />
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
    export default {
        name: 'Default',
        props: [''],
        components: {
            Sidebar
        },
        data() {
            return {
                tags: []
            }
        },
        methods: {
            
        },
    }

</script>

<style scope>

</style>