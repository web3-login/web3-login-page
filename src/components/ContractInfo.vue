<template>
  <div v-if="contract" class="contractinfo">contract: {{ contract }}</div>
</template>
<script>
export default {
  name: "ContractInfo",
  data() {
    return {};
  },
  setup() {
    const search = window.location.search;
    const contract = new URLSearchParams(search).get("contract");
    console.log(search, contract);
    return {
      contract,
    };
  },
};
</script>
<style scoped>
.contractinfo {
  margin: 40px;
  width: 100%;
  height: 90px;

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  text-align: center;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
