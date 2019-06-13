<template>
  <div id="test">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>{{ this.$store.state.key }}</div>    
    <div>bbb</div>    
    <div>bbb</div>    
    <div>bbb</div>    
    <router-link to='/'>sss</router-link>
  </div>
</template>

<script>

export default {
  name: 'test',
  mounted() {
    this.$store.state.key = '44'
  }
}
</script>

<style>
#test {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
