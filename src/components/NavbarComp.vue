<template>
  <div class="navbar">
    <router-link to="/"><web-3-logo /></router-link>
    <router-link id="config" to="/config">Configure your Webpage</router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Web3Logo from "../components/Web3Logo.vue";
export default defineComponent({
  name: "NavbarComp",
  components: {
    Web3Logo,
  },
});
</script>
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 10px;
  overflow: hidden;
  color: white;
}
.navbar a {
  display: block;
  text-align: center;
  margin: 18px 10px;
  text-decoration: none;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
}
@media only screen and (max-width: 768px) {
  .navbar {
    width: 300px;
  }
  .navbar a {
    margin: auto;
  }
  #config {
    display: none;
  }
}
</style>