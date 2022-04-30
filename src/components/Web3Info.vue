<template>
  <div class="web3info">
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
.web3info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
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
@media only screen and (max-width: 768px) {
  .web3info {
    margin: 0;
    transform: scale(0.5);
    height: 200px;
    width: 350px;
  }
  .title {
    height: auto;
  }
  .text-content {
    width: 300px;
    height: auto;
  }
}
</style>
