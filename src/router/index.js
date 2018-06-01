import Vue from 'vue'
import Router from 'vue-router'
import Voting from '@/components/Voting'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Voting',
      component: Voting
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]
})
