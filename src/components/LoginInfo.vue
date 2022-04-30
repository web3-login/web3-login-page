<template>
  <h1 class="logininfo">
    Log in using your crypto <br />
    account
  </h1>
</template>

<script>
export default {
  name: "LoginInfo",
};
</script>
<style scoped>
.logininfo {
  margin: 40px;
  width: 100%;
  height: 90px;

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
@media only screen and (max-width: 768px) {
  .logininfo {
    transform: scale(0.5);
    transform-origin: top center;
    margin: 0;
    width: 350px;
  }
}
</style>
