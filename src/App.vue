<template>
  <div>
    <navbar-comp />
    <router-view />
  </div>
</template>

<script>
import NavbarComp from "./components/NavbarComp.vue";

export default {
  name: "App",
  components: {
    NavbarComp,
  },
};
</script>

<style>
body {
  background: #002245;
}
navbar-comp {
  position: absolute;
  top: 0px;
  right: 50px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #002245;
}
</style>
