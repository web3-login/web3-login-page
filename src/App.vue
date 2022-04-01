<template>
  <img alt="Vue logo" src="./assets/logo.svg">
  <Main />
</template>

<script>
import Main from './view/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
body {
  background: #002245;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #002245;
}
</style>
