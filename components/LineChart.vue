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
import { METHODS } from 'http'

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
        labels: [this.getMonthNumber(0), this.getMonthNumber(1), this.getMonthNumber(2), this.getMonthNumber(3), this.getMonthNumber(4), this.getMonthNumber(5)].reverse(),
        datasets: [{
          label: 'Рубли',
          data: [this.getEarningsPerMonth(orders, this.getMonthNumber(0)), this.getEarningsPerMonth(orders, this.getMonthNumber(1)), this.getEarningsPerMonth(orders, this.getMonthNumber(2)), this.getEarningsPerMonth(orders, this.getMonthNumber(3)), this.getEarningsPerMonth(orders, this.getMonthNumber(4)), this.getEarningsPerMonth(orders, this.getMonthNumber(5))].reverse(),
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
    getMonthNumber(number) {
      const today = new Date(Date.now());
      return new Date(today.setMonth(today.getMonth() - number)).toLocaleDateString().slice(3, 10)
    },

    getEarningsPerMonth(orders, month) {
      let monthSum = 0
      for (let i = 0; i < orders.length; i++) {
        if (orders[i].datetime.slice(3, 10) == month) {
          monthSum = monthSum + orders[i].price;
        }
      }
      return monthSum
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
