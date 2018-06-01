<template>
  <div class="hello">
    <h1>Welchen Film möchtest du gerne schauen?</h1>
    <ul>
      <li v-for="movie of movies" :key="movie" @click="vote(movie)">{{movie}}</li>
    </ul>
  </div>
</template>

<script>
import router from '@/router'
import db from './db'

export default {
  name: 'Voting',
  data () {
    return {
      movies: [
        'The Big Lebovski',
        'Brasil',
        'Inception',
        'Fight Club'
      ],
    }
  },
  methods: {
    vote (movie) {
      db.ref('voting').push(movie)
      router.push('/result')
    }
  }
}
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>
