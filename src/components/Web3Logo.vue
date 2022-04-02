<template>
  <div class="content">
    <h1>
      <div class="web3">Web3</div>
      Login
    </h1>
  </div>
</template>

<script>
export default {
  name: "Web3Logo",
};
</script>
<style scoped>
.content {
  margin: 20px;
  height: 94px;
  width: 185px;
  line-height: 90px;
}
.content h1 {
  text-align: center;
  display: flex;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #ffffff;
}
.web3 {
  height: 80px;
  width: 98px;

  background-image: url("../assets/logo.svg");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
