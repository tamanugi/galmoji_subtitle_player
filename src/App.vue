<template>
  <div id="app">
    <app-title></app-title>
    <div class="row app_container">
      <manual></manual>
      <router-view></router-view>
      <social-area></social-area>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppTitle from './components/AppTitle'
import AppFooter from './components/AppFooter'
import SocialArea from './components/SocialArea'
import Manual from './components/Manual'

export default {
  name: 'app',
  components: {
    AppTitle,
    AppFooter,
    SocialArea,
    Manual
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
html, body {
  height: 100%;
  margin: 0;
}

.app_container {
  margin-top: 120px;
  min-height: calc(100vh - 250px);
}
</style>
