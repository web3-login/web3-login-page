<template>
  <div class="content">
    <login-info />
    <login-comp />
    <decentralication-info />
    <web-3-info />
    <web-123-info />
    <how-it-works-info />
    <bubble-info />
    <story-comp />
  </div>
</template>

<script>
import LoginInfo from "../components/LoginInfo.vue";
import DecentralicationInfo from "../components/DecentralicationInfo.vue";
import Web3Info from "../components/Web3Info.vue";
import Web123Info from "../components/Web123Info.vue";
import HowItWorksInfo from "../components/HowItWorksInfo.vue";
import BubbleInfo from "../components/BubbleInfo.vue";
import LoginComp from "../components/LoginComp.vue";
import StoryComp from "@/components/StoryComp.vue";
export default {
  name: "MainView",
  components: {
    LoginInfo,
    DecentralicationInfo,
    Web3Info,
    Web123Info,
    HowItWorksInfo,
    BubbleInfo,
    LoginComp,
    StoryComp
},
};
</script>
<style scoped>
.content {
  position: relative;
  align-content: center;
  background: #002245;
}
@media only screen and (max-width: 768px) {
  .content {
    max-width: 350px;
  }
}
</style>
