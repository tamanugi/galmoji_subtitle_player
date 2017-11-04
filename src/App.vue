<template>
  <div id="app">
    <app-title></app-title>
    <router-view></router-view>
    <social-area></social-area>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppTitle from './components/AppTitle'
import AppFooter from './components/AppFooter'
import SocialArea from './components/SocialArea'

export default {
  name: 'app',
  components: {
    AppTitle,
    AppFooter,
    SocialArea
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
