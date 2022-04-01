<template>
  <div class="content">
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
.content {
  display: flex;
  margin: 20px;
}
.web1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
.web2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
.web3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
</style>
