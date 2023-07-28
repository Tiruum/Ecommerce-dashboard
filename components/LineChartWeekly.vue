<template>
  <div class="relative w-[40wh] h-[40vh]">
    <LineChartGenerator
  :chart-options="chartOptions"
  :chart-data="chartData"
  :chart-id="chartId"
  :dataset-id-key="datasetIdKey"
  :plugins="plugins"
  :css-classes="cssClasses"
  :styles="styles"
  />
    {{getDayNumber(0)}}
  </div>
</template>

<script>
import { Line as LineChartGenerator } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Filler,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Filler,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
)

import orders from '../assets/json/orders.json';

export default {
  name: 'LineChart',
  components: {
    LineChartGenerator
  },
  props: {
    chartId: {
      type: String,
      default: 'line-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    cssClasses: {
      default: '',
      type: String
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chartData: {
        labels: this.createDataArray(orders).labels,
        datasets: [{
          label: 'Рубли',
          data: this.createDataArray(orders).data,
          backgroundColor: 'rgba(34, 197, 94, 0.2)',
          borderColor: 'rgba(34, 197, 94, 1)',
          pointBackgroundColor: 'white',
          pointBorderColor: 'rgba(34, 197, 94, 1)',
          borderWidth: 1.5,
          tension: 0.3,
          fill: true,
        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      }
    }
  },
  methods: {
    // Line chart data
    getDayNumber(number) {
      const today = new Date(Date.now());
      return new Date(today.setDate(today.getDate() - number)).toLocaleDateString().slice(0, 10)
    },

    getEarningsPerDay(orders, day) {
      let daySum = 0
      for (let i = 0; i < orders.length; i++) {
        if (orders[i].datetime.slice(0, 10) == day) {
          daySum = daySum + orders[i].price;
        }
      }
      return daySum
    },
    createDataArray(orders) {
      let labels = []
      let data = []
      for (let i = 0; i < 14; i++) {
        labels.push(this.getDayNumber(i).slice(0, 5));
        data.push(this.getEarningsPerDay(orders, this.getDayNumber(i)));
      }
      return { labels: labels.reverse(), data: data.reverse() }
    }
  },
  computed: {
    styles() {
      return {
        height: '100%',
        position: 'relative',
      };
    },
  },
}
</script>
