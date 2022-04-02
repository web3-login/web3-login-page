<template>
  <div class="content">
    <no-metamask />
    <login-button />
  </div>
</template>

<script>
import NoMetamask from "./NoMetamask.vue";
import LoginButton from "./LoginButton.vue";
export default {
  name: "LoginComp",
  components: {
    NoMetamask,
    LoginButton
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
