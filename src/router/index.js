import Vue from 'vue'
import Router from 'vue-router'
import Player from 'components/Player'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: location.pathname,
  routes: [
    {
      path: '/',
      name: 'Player',
      component: Player
    }
  ]
})
