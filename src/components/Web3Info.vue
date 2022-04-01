<template>
  <div class="content">
    <div class="title">What is Web3 and what it does?</div>
    <div class="text-content">
      This application only needs to use the wallet private key to sign a string
      to prove that you are the owner of this address.
    </div>
  </div>
</template>

<script>
export default {
  name: "Web3Info",
};
</script>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
.title {
  margin: 20px;
  height: 40px;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
}
.text-content {
  width: 797px;
  height: 60px;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;

  color: #ffffff;
}
</style>
