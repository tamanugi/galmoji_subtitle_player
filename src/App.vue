<template>
  <div id="app">
    <app-title></app-title>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppTitle from './components/AppTitle'
import AppFooter from './components/AppFooter'
export default {
  name: 'app',
  components: {
    AppTitle,
    AppFooter
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
  margin-top: 60px;
}
</style>
