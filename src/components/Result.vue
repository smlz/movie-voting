<template>
  <div class="">
    <h1>Resultat</h1>
    <ol>
      <li v-for="voting in votingList" :key="voting.movie">
        {{voting.movie}} - {{voting.number}}
      </li>
    </ol>
  </div>
</template>

<script>
import Vue from 'vue'
import db from './db'

export default {
  name: 'Result',
  data () {
    let votings = {}
    let vm = this
    db.ref('voting').on('child_added', child => {
       Vue.set(votings, child.val(), (votings[child.val()] || 0) + 1)
    })
    return {
      votings: votings
    }
  },
  computed: {
    votingList () {
      let list = []
      for (let movie in this.votings) {
        list.push({movie: movie, number: this.votings[movie]})
      }
      list.sort((v1, v2) => v1.number < v2.number)

      return list
    }
  }
}
</script>

<style scoped>
ol li:first-child {
  font-weight:bold;
}
</style>
