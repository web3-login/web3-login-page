<template>
  <div class="marketinfo">
    You need an NFT? Get one from this
    <b><a href="https://market.web3-login.net">market</a></b
    >.
  </div>
</template>
<script>
export default {
  name: "MarketInfo",
};
</script>
<style scoped>
.marketinfo {
  height: 90px;

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-align: center;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
a {
  text-decoration: none;
}
a:link,
a:visited {
  color: white;
}
a:hover {
  color: white;
}
</style>
