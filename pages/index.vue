<template>
  <div class="flex md:gap-4 gap-0 transition-all">
    <div class="flex-none lg:w-64 sm:w-16 w-0"></div>
    <div
      class="sm:hidden fixed text-white bg-gray-800 w-10 h-10 top-3 left-3 rounded-full flex items-baseline justify-center text-3xl font-semibold cursor-pointer opacity-90">
      +</div>
    <div class="md:mr-8 md:mt-8 md:ml-4 md:mb-8 mr-2 mt-2 ml-2 mb-2 w-full h-fit text-gray-900 dark:text-white">
      <div class="mb-8">
        <h1 class="font-semibold text-3xl">Добро пожаловать 👋</h1>
        <p class="text-base mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem
          Ipsum
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
          galley of
          type and scrambled it to make a type specimen book.</p>
      </div>
      <div class="grid grid-cols-4 md:gap-6 gap-2">
        <div class="lg:col-span-1 md:col-span-2 col-span-4 grid grid-cols-1 grid-rows-2 md:gap-6 gap-2">
          <div
            class="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 overflow-auto">
            <h2 class="font-base text-lg text-gray-900 dark:text-gray-200 block">Заработок за день</h2>
            <span class="font-semibold text-5xl block mt-2">{{ dayEarnings }}₽</span>
            <span class="flex items-center mt-2 text-base"
              :class="[currentDayPercentage > 0 ? 'text-green-500' : '', currentDayPercentage < 0 ? 'text-red-500' : '' ]">
              <svg id="up_arrow" class="w-6 h-6" :class="[ currentDayPercentage < 0 ? 'rotate-180' : 'rotate-0' ]"
                data-name="up_arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 425.74 425.58">
                <path
                  d="M513.2,287c7.79,1.07,15.64,1.84,23.36,3.26,60.34,11.14,107.59,42.41,141.53,93.37,24.51,36.81,36,77.77,34.53,121.91-2,61.41-26.22,112.91-72,153.9C608.72,688,571.23,705.61,528.7,710.72c-74.71,9-138-14.55-188.55-70.37-28.76-31.74-45.3-69.55-51.3-112-.71-5.06-1.24-10.14-1.85-15.2V486.59c.93-7.12,1.63-14.28,2.83-21.35,6.85-40.43,23.74-76.17,51.12-106.7,32.9-36.69,73.68-59.61,122.3-68.26,7.73-1.38,15.55-2.2,23.34-3.28ZM499.62,691.42c105.71.2,191.26-85,191.81-191C692,394.91,606,308.61,500.1,308.36s-191.72,85.57-191.75,191.5C308.31,605.6,393.81,691.23,499.62,691.42Z"
                  transform="translate(-287 -287)" fill="currentColor" />
                <path
                  d="M499.89,462.83l-31.78,36.3c-11.12,12.71-22.17,25.5-33.45,38.07a17.56,17.56,0,0,1-7.39,4.9c-4.21,1.33-8.71-1.07-11-4.84a10.62,10.62,0,0,1,1.12-12.38c5.25-6.26,10.7-12.36,16.08-18.5q28.45-32.52,56.92-65c6.23-7.11,12.71-7.16,18.89-.1q36,41.1,71.95,82.23c4.44,5.07,4.92,10.73,1.37,15-4.37,5.28-11.71,5.31-16.62-.21-9.49-10.65-18.82-21.44-28.21-32.18Z"
                  transform="translate(-287 -287)" fill="currentColor" />
              </svg>
              <span class="ml-1">{{ currentDayPercentage }}%</span>
            </span>
          </div>
          <div
            class="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 overflow-auto">
            <h2 class="font-base text-lg text-gray-900 dark:text-gray-200 block">Заработок за месяц</h2>
            <span class="font-semibold text-5xl block mt-2">{{ monthEarnings }}₽</span>
            <span class="flex items-center mt-2 text-base"
              :class="[currentMonthPercentage > 0 ? 'text-green-500' : '', currentMonthPercentage < 0 ? 'text-red-500' : '' ]">
              <svg id="up_arrow" class="w-6 h-6" :class="[ currentMonthPercentage < 0 ? 'rotate-180' : 'rotate-0' ]"
                data-name="up_arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 425.74 425.58">
                <path
                  d="M513.2,287c7.79,1.07,15.64,1.84,23.36,3.26,60.34,11.14,107.59,42.41,141.53,93.37,24.51,36.81,36,77.77,34.53,121.91-2,61.41-26.22,112.91-72,153.9C608.72,688,571.23,705.61,528.7,710.72c-74.71,9-138-14.55-188.55-70.37-28.76-31.74-45.3-69.55-51.3-112-.71-5.06-1.24-10.14-1.85-15.2V486.59c.93-7.12,1.63-14.28,2.83-21.35,6.85-40.43,23.74-76.17,51.12-106.7,32.9-36.69,73.68-59.61,122.3-68.26,7.73-1.38,15.55-2.2,23.34-3.28ZM499.62,691.42c105.71.2,191.26-85,191.81-191C692,394.91,606,308.61,500.1,308.36s-191.72,85.57-191.75,191.5C308.31,605.6,393.81,691.23,499.62,691.42Z"
                  transform="translate(-287 -287)" fill="currentColor" />
                <path
                  d="M499.89,462.83l-31.78,36.3c-11.12,12.71-22.17,25.5-33.45,38.07a17.56,17.56,0,0,1-7.39,4.9c-4.21,1.33-8.71-1.07-11-4.84a10.62,10.62,0,0,1,1.12-12.38c5.25-6.26,10.7-12.36,16.08-18.5q28.45-32.52,56.92-65c6.23-7.11,12.71-7.16,18.89-.1q36,41.1,71.95,82.23c4.44,5.07,4.92,10.73,1.37,15-4.37,5.28-11.71,5.31-16.62-.21-9.49-10.65-18.82-21.44-28.21-32.18Z"
                  transform="translate(-287 -287)" fill="currentColor" />
              </svg>
              <span class="ml-1">{{ currentMonthPercentage }}%</span>
            </span>
          </div>
        </div>

        <div
          class="lg:col-span-3 md:col-span-2 sm:col-span-4 col-span-4 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50">
          <div class="flex items-start justify-between">
            <h2 class="mb-2 font-base text-lg text-gray-900 dark:text-gray-200 block">Заработок</h2>
            <div>
              <select @change="showChart($event)" class="bg-gray-300 dark:bg-gray-700 rounded-md px-1 py-0.5">
                <option value="monthly">Шесть месяцев</option>
                <option value="weekly">Две недели</option>
              </select>
            </div>
          </div>
          <div v-if="chartShowcase == 'monthly'">
            <LineChart />
          </div>
          <div v-else-if="chartShowcase == 'weekly'">
            <LineChartWeekly />
          </div>
        </div>

        <div
          class="lg:col-span-2 col-span-4 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 overflow-auto">
          <h2 class="mb-2 font-base text-lg text-gray-900 dark:text-gray-200 block">Посещаемость</h2>
          <BarChart />
        </div>
        <div
          class="lg:col-span-2 col-span-4 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 overflow-auto">
          <h2 class="mb-2 font-base text-lg text-gray-900 dark:text-gray-200 block">Недавнее</h2>
          <div class="flex flex-col flex-none">
            <div
              class="grid grid-cols-4 p-2 even:bg-gray-100 odd:bg-gray-50 dark:even:bg-gray-700 dark:odd:bg-gray-800">
              <span>00:41 07.07.2022</span>
              <span>Тимур Селин</span>
              <span>Сайт интернет-магазина</span>
              <span class="text-green-500">Оплачено</span>
            </div>
            <div
              class="grid grid-cols-4 p-2 even:bg-gray-100 odd:bg-gray-50 dark:even:bg-gray-700 dark:odd:bg-gray-800">
              <span>12:58 06.07.2022</span>
              <span>Billy Herrington</span>
              <span>Cowboy pants</span>
              <span class="text-green-500">Оплачено</span>
            </div>
            <div
              class="grid grid-cols-4 p-2 even:bg-gray-100 odd:bg-gray-50 dark:even:bg-gray-700 dark:odd:bg-gray-800">
              <span>6:23 04.06.2022</span>
              <span>Van Darkholme</span>
              <span>Latex costume</span>
              <span class="text-yellow-500">В ожидании</span>
            </div>
            <div
              class="grid grid-cols-4 p-2 even:bg-gray-100 odd:bg-gray-50 dark:even:bg-gray-700 dark:odd:bg-gray-800">
              <span>6:23 04.06.2022</span>
              <span>Mark wolf</span>
              <span>Shirt</span>
              <span class="text-red-500">Не оплачено</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/LineChart.vue';
import LineChartWeekly from '@/components/LineChartWeekly.vue';
import BarChart from '@/components/BarChart.vue';
export default {
  name: 'Index',
  components: { LineChart, LineChartWeekly, BarChart },
  data() {
    return {
      users: [],
      dayEarnings: 0,
      monthEarnings: 0,
      currentDayPercentage: null,
      currentMonthPercentage: null,
      orders: [],
      chartShowcase: 'monthly'
    };
  },
  methods: {
    showChart(e) {
      switch (e.target.value) {
        case 'monthly':
          this.chartShowcase = 'monthly';
          break;
        case 'weekly':
          this.chartShowcase = 'weekly';
          break;
      }
    }
  },
  // async fetch() {
  //   this.users = await this.$api("users", "index");
  // },
  mounted() {
    this.$nextTick(async function () {
      try {
        const response = await this.$axios.get('/api/orders')
        this.orders = response.data
      } catch (err) {
        console.log(err)
      }
    })

    // Counting day and mounth earnings
    for (var i = 0; i < this.orders.length; i++) {
      if (this.orders[i].datetime.slice(0, 10) == new Date(Date.now()).toLocaleDateString()) {
        this.dayEarnings = this.dayEarnings + this.orders[i].price;
      }

      if (this.orders[i].datetime.slice(3, 10) == new Date(Date.now()).toLocaleString().slice(3, 10)) {
        this.monthEarnings = this.monthEarnings + this.orders[i].price;
      }
    }

    // Counting day earning percentage
    var today = new Date(Date.now());
    const previousDay = new Date(today.setDate(today.getDate() - 1)).toLocaleDateString().slice(0, 10);
    let prevDaySum = 0
    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].datetime.slice(0, 10) == previousDay) {
        prevDaySum = prevDaySum + this.orders[i].price;
      }
    }
    if (prevDaySum != 0) {
      this.currentDayPercentage = parseFloat((this.dayEarnings / prevDaySum - 1) * 100).toFixed(1);
    } else {
      this.currentDayPercentage = 100.0;
    }

    // Counting month earning percentage
    var today = new Date(Date.now());
    const previousMonth = new Date(today.setMonth(today.getMonth() - 1)).toLocaleDateString().slice(3, 10);
    let prevMonthSum = 0
    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].datetime.slice(3, 10) == previousMonth) {
        prevMonthSum = prevMonthSum + this.orders[i].price;
      }
    }
    if (prevMonthSum != 0) {
      this.currentMonthPercentage = parseFloat((this.monthEarnings / prevMonthSum - 1) * 100).toFixed(1);
    } else {
      this.currentMonthPercentage = 100.0;
    }
  }
}

</script>

<style scope>
</style>