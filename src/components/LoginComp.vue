<template>
  <div class="content">
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
.content {
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
