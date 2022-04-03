<template>
  <div class="content">
    <no-metamask />
    <contract-info />
    <login-button />
  </div>
</template>

<script>
import NoMetamask from "./NoMetamask.vue";
import LoginButton from "./LoginButton.vue";
import ContractInfo from './ContractInfo.vue';
export default {
  name: "LoginComp",
  components: {
    NoMetamask,
    LoginButton,
    ContractInfo
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
