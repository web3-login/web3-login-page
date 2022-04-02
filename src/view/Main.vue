<template>
  <div class="content">
    <web-3-logo />
    <login-info />
    <decentralication-info />
    <web-3-info />
    <web-123-info />
    <how-it-works-info />
    <bubble-info />
  </div>
</template>

<script>
import Web3Logo from "../components/Web3Logo.vue";
import LoginInfo from "../components/LoginInfo.vue";
import DecentralicationInfo from "../components/DecentralicationInfo.vue";
import Web3Info from "../components/Web3Info.vue";
import Web123Info from "../components/Web123Info.vue";
import HowItWorksInfo from "../components/HowItWorksInfo.vue";
import BubbleInfo from "../components/BubbleInfo.vue";
export default {
  name: "MainView",
  components: {
    Web3Logo,
    LoginInfo,
    DecentralicationInfo,
    Web3Info,
    Web123Info,
    HowItWorksInfo,
    BubbleInfo
  },
};
</script>
<style scoped>
web-3-logo {
  position: absolute;
  left: 2%;
  top: 5%;
}
.content {
  position: relative;

  align-content: center;
  background: #002245;
}
</style>
