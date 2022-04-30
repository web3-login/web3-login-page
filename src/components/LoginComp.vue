<template>
  <div class="logincomp">
    <metamask-info />
    <contract-info />
    <login-button />
  </div>
</template>

<script>
import LoginButton from "./LoginButton.vue";
import ContractInfo from './ContractInfo.vue';
import MetamaskInfo from './MetamaskInfo.vue';
export default {
  name: "LoginComp",
  components: {
    LoginButton,
    ContractInfo,
    MetamaskInfo
  },
};
</script>
<style scoped>
.logincomp {
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media only screen and (max-width: 768px) {
  .logincomp {
    margin: auto;
    transform: scale(0.8);
    width: 350px;
  }
}
</style>
