<template>
  <div class="nometamask">
    <span>You will need</span
    ><a href="https://metamask.io/"
      ><img
        alt="metamask wallet"
        src="../assets/metamask-fox.svg"
        width="68"
        height="60"
      /> </a
    ><a href="https://metamask.io/"><span>METAMASK</span></a
    ><span>&nbsp;or&nbsp;</span>
    <a href="https://metamask.io/"
      ><img
        alt="coinbase wallet"
        src="../assets/Coinbase_Wordmark.svg"
        width="160"
        height="60"
      /> </a
    ><a href="https://www.coinbase.com/wallet"></a>
    <span>&nbsp; Wallet to sign a message</span>
  </div>
</template>
<script>
export default {
  name: "NoMetamask",
};
</script>
<style scoped>
.nometamask {
  margin: 20px;
  width: fit-content;
  height: 60px;
  display: flex;
}
.nometamask span {
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #ffffff;
  line-height: 60px;
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
