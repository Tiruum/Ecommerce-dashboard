<template>
    <div class="relative">
        <input v-model="newTag" class="inpt" :style="{'padding-left' : paddingLeft + 'px'}" type="text" autocomplete="off" @keydown.enter="addTag(newTag)"
            @keydown.prevent.tab="addTag(newTag)" @keydown.delete="newTag.length || removeTag(tags.length - 1)" />
        <div v-if="showCount" class="absolute text-gray-900 top-1/2 -translate-y-1/2 right-1 text-sm whitespace-nowrap">
            <span class="bg-gray-200 p-1 rounded-md">{{ tags.length }}</span>
        </div>

        <ul ref="tagsUl" class="list-none flex items-center gap-1 m-0 p-0 absolute top-0 bottom-0 left-1 max-w-[75%] overflow-x-auto overflow-y-hidden">
            <li v-for="(tag, index) in tags" :key="tag"
                class="bg-green-500 p-1 rounded-md text-white whitespace-nowrap transition-all">
                {{ tag }}
                <button class="text-white bg-none outline-none border-none cursor-pointer"
                    @click.prevent="removeTag(index)">x</button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['tags'],
    data() {
        return {
            newTag: '',
            showCount: true,
            paddingLeft: 8,
        }
    },
    methods: {
        addTag(tag) {
            this.tags.push(tag);
            this.newTag = ''
        },
        removeTag(index){
            this.tags.splice(index, 1);
        },
        setLeftPadding() {
            const extraCushion = 15
            this.paddingLeft = this.$refs.tagsUl.clientWidth + extraCushion;
            this.$refs.tagsUl.scrollTo(this.$refs.tagsUl.scrollWidth, 0);
        },
    },
    watch: {
        tags(){
            this.$nextTick(this.setLeftPadding())
        } 
    },
    mounted() {
        this.setLeftPadding()
    }
}
</script>

<style scoped>
input, ul {
    overflow: overlay;
}
</style>