<template>
    <div class="flex md:gap-4 gap-0 transition-all">
        <div class="flex-none lg:w-64 sm:w-16 w-0"></div>
        <div
            class="sm:hidden fixed text-white bg-gray-800 w-10 h-10 top-3 left-3 rounded-full flex items-baseline justify-center text-3xl font-semibold cursor-pointer opacity-90">
            +</div>
        <div class="md:mr-8 md:mt-8 md:ml-4 md:mb-8 mr-2 mt-2 ml-2 mb-2 w-full h-fit text-gray-900 dark:text-white">
            <div class="mb-8">
                <h1 class="font-semibold text-3xl">Добавление товара ✍️</h1>
                <p class="text-base mt-2">На этой странице вы можете добавить новый товар</p>
            </div>
            <div
                class="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 overflow-auto">
                <form @submit.prevent="createProduct" @keypress.enter.prevent>
                    <div class="mt-3 grid grid-cols-2 gap-4 p-2"
                        :class="(!(form.title && form.price)) ? 'rounded-md bg-red-100 dark:bg-red-500' : 'rounded-md bg-green-100 dark:bg-green-400'">
                        <div class="flex flex-col">
                            <div>
                                <label for="title"
                                    class="mr-1 text-md font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">Название</label>
                                <span v-if="!(form.title)" class="text-red-500">Не заполнено</span>
                            </div>
                            <input type="text" class="mt-1 inpt bg-white dark:bg-dark-700" id="title"
                                v-model="form.title">
                        </div>
                        <div class="flex flex-col">
                            <div>
                                <label for="price"
                                    class="mr-1 text-md font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">Цена</label>
                                <span v-if="!(form.price)" class="text-red-500">Не заполнено</span>
                            </div>
                            <input type="text" class="mt-1 inpt bg-white dark:bg-dark-700" id="price"
                                v-model="form.price">
                        </div>
                    </div>
                    <div class="mt-3 grid grid-cols-2 gap-4 p-2"
                        :class="(!(form.article && form.breadcrumbs.length != 0)) ? 'rounded-md bg-red-100 dark:bg-red-500' : 'rounded-md bg-green-100 dark:bg-green-400'">
                        <div class="flex flex-col">
                            <div>
                                <label for="article"
                                    class="mr-1 text-md font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">Артикул</label>
                                <span v-if="!(form.article)" class="text-red-500">Не заполнено</span>
                            </div>
                            <input type="text" class="mt-1 inpt bg-white dark:bg-dark-700" id="article"
                                v-model="form.article">
                        </div>
                        <div class="flex flex-col">
                            <div class="mb-1">
                                <label for="breadcrumbs"
                                    class="mr-1 text-md font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">Хлебные
                                    крошки</label>
                                <span v-if="(form.breadcrumbs.length == 0)" class="text-red-500">Не
                                    заполнено</span>
                            </div>
                            <!-- <input type="text" class="mt-1 inpt bg-white dark:bg-dark-700" id="breadcrumbs"
                                v-model="form.breadcrumbs"> -->
                            <TagInput v-bind:tags="form.breadcrumbs" />
                        </div>
                    </div>
                    <div class="mt-3 grid grid-cols-2 gap-4 p-2"
                        :class="(((form.colorName.length == 0) && (form.colorStyle.length == 0) && (form.imagesSrc.length == 0) && (form.imagesAlt.length == 0))) ? 'rounded-md bg-red-100 dark:bg-red-500' : 'rounded-md bg-green-100 dark:bg-green-400'">
                        <div class="flex flex-col">
                            <div class="mb-1">
                                <label for="images"
                                    class="mr-1 text-md font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">Картинки</label>
                                <span v-if="!(form.imagesSrc && form.imagesAlt)" class="text-red-500">Не
                                    заполнено</span>
                            </div>
                            <!-- <textarea class="mt-1 inpt bg-white dark:bg-dark-700" placeholder="imageSrc"
                                v-model="form.imagesSrc"></textarea> -->
                            <VerticalTagInput v-bind:tags="form.imagesSrc" v-bind:placeholder="'http://...'" />
                            <!-- <textarea class="mt-1 inpt bg-white dark:bg-dark-700" placeholder="imageAlt"
                                v-model="form.imagesAlt"></textarea> -->
                            <VerticalTagInput v-bind:tags="form.imagesAlt" v-bind:placeholder="'Описание фото'" />
                        </div>
                        <div class="flex flex-col">
                            <div class="mb-1">
                                <label for="colors"
                                    class="mr-1 text-md font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">Цвета</label>
                                <span v-if="!(form.colorName && form.colorStyle)" class="text-red-500">Не
                                    заполнено</span>
                            </div>
                            <!-- <textarea class="mt-1 inpt bg-white dark:bg-dark-700" v-model="form.colorName"
                                placeholder="Color name"></textarea> -->
                            <VerticalTagInput v-bind:tags="form.colorName" v-bind:placeholder="'Черно-белый'" />
                            <!-- <textarea class="mt-1 inpt bg-white dark:bg-dark-700" v-model="form.colorStyle"
                                placeholder="Color style"></textarea> -->
                            <VerticalTagInput v-bind:tags="form.colorStyle" v-bind:placeholder="'black white'" />
                        </div>
                    </div>
                    <div class="mt-3 flex flex-col p-2"
                        :class="(!(form.sizesXS || form.sizesS || form.sizesM || form.sizesL || form.sizesXL || form.sizes2XL || form.sizes3XL)) ? 'rounded-md bg-red-100 dark:bg-red-500' : 'rounded-md bg-green-100 dark:bg-green-400'">
                        <div>
                            <label for="sizes"
                                class="mr-1 text-md font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">Размеры</label>
                            <span
                                v-if="!(form.sizesXS || form.sizesS || form.sizesM || form.sizesL || form.sizesXL || form.sizes2XL || form.sizes3XL)"
                                class="text-red-500">
                                Ничего не выбрано
                            </span>
                        </div>
                        <div>
                            <span class="mr-3"><input type="checkbox" class="rounded-md mr-1" v-model="form.sizesXS"
                                    value="XS">XS</span>
                            <span class="mr-3"><input type="checkbox" class="rounded-md mr-1" v-model="form.sizesS"
                                    value="S">S</span>
                            <span class="mr-3"><input type="checkbox" class="rounded-md mr-1" v-model="form.sizesM"
                                    value="M">M</span>
                            <span class="mr-3"><input type="checkbox" class="rounded-md mr-1" v-model="form.sizesL"
                                    value="L">L</span>
                            <span class="mr-3"><input type="checkbox" class="rounded-md mr-1" v-model="form.sizesXL"
                                    value="XL">XL</span>
                            <span class="mr-3"><input type="checkbox" class="rounded-md mr-1" v-model="form.sizes2XL"
                                    value="2XL">2XL</span>
                            <span class="mr-3"><input type="checkbox" class="rounded-md mr-1" v-model="form.sizes3XL"
                                    value="3XL">3XL</span>
                        </div>
                    </div>
                    <div class="mt-3 grid grid-cols-2 gap-4 p-2"
                        :class="(!(form.description && form.details)) ? 'rounded-md bg-red-100 dark:bg-red-500' : 'rounded-md bg-green-100 dark:bg-green-400'">
                        <div>
                            <div>
                                <label for="description"
                                    class="mr-1 text-md font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">Описание</label>
                                <span v-if="!(form.description)" class="text-red-500">
                                    Не заполнено
                                </span>
                            </div>
                            <textarea class="mt-1 inpt bg-white dark:bg-dark-700" maxlength="100" id="description"
                                v-model="form.description"></textarea>
                        </div>
                        <div>
                            <div>
                                <label for="details"
                                    class="mr-1 text-md font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">Детали</label>
                                <span v-if="!(form.details)" class="text-red-500">Не заполнено</span>
                            </div>
                            <textarea class="mt-1 inpt bg-white dark:bg-dark-700" maxlength="500" id="details"
                                v-model="form.details"></textarea>
                        </div>
                    </div>
                    <div class="mt-3 grid grid-cols-1 p-2"
                        :class="(form.tags.length == 0) ? 'rounded-md bg-red-100 dark:bg-red-500' : 'rounded-md bg-green-100 dark:bg-green-400'">
                        <div>
                            <label for="tags"
                                class="mr-1 text-md font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">Теги</label>
                            <span v-if="(form.tags.length == 0)" class="text-red-500">Не заполнено</span>
                        </div>
                        <TagInput v-bind:tags="form.tags" />
                    </div>
                    <button
                        class="w-full enabled:dark:text-white text-gray-900 border enabled:border-green-500 enabled:hover:dark:bg-green-500 enabled:hover:bg-green-400 enabled:hover:text-white transition-all py-2 rounded-full mt-3 disabled:border-slate-500 disabled:text-gray-500 text-lg disabled:cursor-not-allowed"
                        type="submit" :disabled="canCreate">Создать</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import TagInput from '@/components/TagInput.vue'
import VerticalTagInput from '@/components/verticalTagInput.vue';

export default {
    name: 'Addproduct',
    components: {
        TagInput,
        VerticalTagInput,
    },
    data() {
        return {
            loading: false,
            form: {
                title: 'Название',
                price: 12345,
                article: 'артикул',
                breadcrumbs: [],
                imagesSrc: [],
                imagesAlt: [],
                colorName: [],
                colorStyle: [],
                sizesXS: false,
                sizesS: false,
                sizesM: false,
                sizesL: false,
                sizesXL: false,
                sizes2XL: false,
                sizes3XL: false,
                description: 'Описание продукта',
                details: 'Детали продукта',
                tags: [],
            },
            products: [],
        }
    },
    methods: {
        async createProduct() {
            const { ...product } = this.form;

            // Images
            const imagesSrcArray = product.imagesSrc;
            const imagesAltArray = product.imagesAlt;
            var images = []
            if (imagesSrcArray.length === imagesAltArray.length) {
                for (var i = 0; i < imagesSrcArray.length; i++) {
                    images.push({src: imagesSrcArray[i], alt: imagesAltArray[i]})
                }
            }

            // Breadcrumbs
            const breadcrumbsArray = product.breadcrumbs;
            var breadcrumbs = []
            for (var i = 0; i < breadcrumbsArray.length; i++) {
                breadcrumbs.push({id: i, name: breadcrumbsArray[i], href: '/'})
            }

            // Colors
            const colorNameArray = product.colorName;
            const colorStyleArray = product.colorStyle;
            var colors = []
            if (colorNameArray.length === colorStyleArray.length) {
                for (var i = 0; i < colorNameArray.length; i++) {
                    colors.push({name: colorNameArray[i], style: [colorStyleArray[i].split(' ')[0], colorStyleArray[i].split(' ')[1]]})
                }
            }

            // Sizes
            const sizes = [
                {name: 'XS', inStock: product.sizesXS},
                {name: 'S', inStock: product.sizesS},
                {name: 'M', inStock: product.sizesM},
                {name: 'L', inStock: product.sizesL},
                {name: 'XL', inStock: product.sizesXL},
                {name: '2XL', inStock: product.sizes2XL},
                {name: '3XL', inStock: product.sizes3XL},
            ]

            // Tags
            const tags = product.tags;

            const response = await this.$axios.post('/api/products', {
                title: product.title,
                price: product.price,
                article: product.article,
                breadcrumbs: breadcrumbs,
                images: images,
                colors: colors,
                sizes: sizes,
                description: product.description,
                details: product.details,
                tags: tags,
            });
            console.log(response.data);
            this.products.push(response.data);



            this.form.title = '';
            this.form.price = '';
            this.form.article = '';
            this.form.breadcrumbs = [];
            this.form.imagesSrc = [];
            this.form.imagesAlt = [];
            this.form.colorName = [];
            this.form.colorStyle = [];
            this.form.sizesXS = false;
            this.form.sizesS = false;
            this.form.sizesM = false;
            this.form.sizesL = false;
            this.form.sizesXL = false;
            this.form.sizes2XL = false;
            this.form.sizes3XL = false;
            this.form.description = '';
            this.form.details = '';
            this.form.tags = [];
        },
        editProduct(id) {
            const product = this.products.find(product => product.id === id);
            console.log(product);
            this.form.title = product.title;
            this.form.price = product.price;
            this.form.article = product.article;
            this.form.breadcrumbs = product.breadcrumbs.name.join('; ');
            this.form.imagesSrc = product.images.src.join('; ');
            this.form.imagesAlt = product.images.alt.join('; ');
            this.form.colorName = product.color.name.join('; ');
            this.form.colorStyle = product.color.style.join('; ');
            this.form.sizesXS = product.sizes[1].inStock;
            this.form.sizesS = product.sizes[2].inStock;
            this.form.sizesM = product.sizes[3].inStock;
            this.form.sizesL = product.sizes[4].inStock;
            this.form.sizesXL = product.sizes[5].inStock;
            this.form.sizes2XL = product.sizes[6].inStock;
            this.form.sizes3XL = product.sizes[7].inStock;
            this.form.description = product.description;
            this.form.details = product.details;
            this.form.tags = product.color.style.join('; ');

        },
        deleteProduct(id) {
            this.products = this.products.filter(t => t.id !== id);
        }
    },
    async mounted() {
        this.loading = true;
        this.products = await request('/api/products');
        this.loading = false;
    },
    computed: {
        canCreate() {
            return (!(
                this.form.title.trim() &&
                parseInt(this.form.price) &&
                this.form.article.trim() &&
                this.form.breadcrumbs.length != 0 &&
                this.form.imagesSrc.length != 0 &&
                this.form.imagesAlt.length != 0 &&
                this.form.colorName.length != 0 &&
                this.form.colorStyle.length != 0 &&
                (this.form.sizesXS ||
                    this.form.sizesS ||
                    this.form.sizesM ||
                    this.form.sizesL ||
                    this.form.sizesXL ||
                    this.form.sizes2XL ||
                    this.form.sizes3XL) &&
                this.form.description.trim() &&
                this.form.details.trim() &&
                this.form.tags.length != 0
            ));
        }
    }
}

async function request(url, method = 'GET', data = null) {
    try {
        const headers = {}
        let body

        if (data) {
            headers['Content-Type'] = 'application/json'
            body = JSON.stringify(data)
        }

        const responcse = await fetch(url, {
            method,
            headers,
            body
        })
        return await responcse.json();
    } catch (error) {
        console.warn(error.message);
    }
}

</script>

<style scope>

</style>