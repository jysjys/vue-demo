<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>{{ this.$store.state.key }}</div>    
    <router-link to='/testone'>111</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
   return {
        transitionName: 'slide-left'
    }
  },
  mounted() {
  },
  components: {
    
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
