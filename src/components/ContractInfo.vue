<template>
  <div v-if="contract && redirect_uri" class="contractinfo">
    contract: {{ contract }}<br />
    page: {{ page }}
  </div>
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
    const redirect_uri = new URLSearchParams(search).get("redirect_uri");
    const page = new URL(redirect_uri).hostname;
    return {
      contract,
      redirect_uri,
      page,
    };
  },
};
</script>
<style scoped>
.contractinfo {
  height: 90px;

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-align: center;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
