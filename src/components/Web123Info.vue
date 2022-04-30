<template>
  <div class="web123info">
    <img alt="Monitor" src="../assets/monitor.svg" />
    <div class="web1">
      <img alt="Web 1.0" src="../assets/web1.0.svg" />
    </div>
    <div class="web2">
      <img alt="Web 2.0" src="../assets/web2.0.svg" />
    </div>
    <div class="web3">
      <img alt="Web 3" src="../assets/web3.0.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Web123Info",
};
</script>
<style scoped>
.web123info {
  margin: auto;
  display: flex;
  width: fit-content;
}
.web1,
.web2,
.web3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 20px;
}
@media only screen and (max-width: 768px) {
  .web123info {
    width: 300px;
    height: 50px;
    align-items: center;
  }
  .web123info img {
    height: 50px;
  }
  .web1,
  .web2,
  .web3 {
    margin: auto;
  }
}
</style>
