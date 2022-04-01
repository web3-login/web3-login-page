<template>
  <div class="content">
    <login-info />
    <decentralication-info />
    <web-3-info />
    <web-123-info />
  </div>
</template>

<script>
import LoginInfo from "../components/LoginInfo.vue";
import DecentralicationInfo from "../components/DecentralicationInfo.vue";
import Web3Info from "../components/Web3Info.vue";
import Web123Info from "../components/Web123Info.vue";
export default {
  name: "MainView",
  components: {
    LoginInfo,
    DecentralicationInfo,
    Web3Info,
    Web123Info
  },
};
</script>
<style scoped>
.content {
  position: relative;

  background: #002245;
}
</style>
