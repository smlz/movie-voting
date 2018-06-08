<template>
  <div class="">
    <h1>Resultat</h1>
    <vue-chart type="doughnut" :data="data" :bind="true"></vue-chart>
    <router-link to="/">Vote again</router-link>
  </div>
</template>

<script>
import Vue from 'vue'
import VueChart from 'vue-chart'
import db from './db'
import colorForString from '@/color'

Vue.use(VueChart);

export default {
  name: 'Result',
  data () {
    let votings = {}
    db.ref('voting').on('child_added', child => {
       Vue.set(votings, child.val(), (votings[child.val()] || 0) + 1)
    })
    return {
      votings: votings
    }
  },
  computed: {
    data () {
      let list = []
      for (let movie in this.votings) {
        list.push({movie: movie, number: this.votings[movie]})
      }
      list.sort((v1, v2) => v1.number < v2.number)

      let labels = []
      let backgroundColor = []
      let data = []

      for (let voting of list) {
        labels.push(voting.movie)
        backgroundColor.push(colorForString(voting.movie))
        data.push(voting.number)
      }
      return {labels, datasets: [{backgroundColor, data}]}
    },
  },
  components: {
    VueChart
  }
}
</script>

<style scoped>
ol li:first-child {
  font-weight:bold;
}
</style>
