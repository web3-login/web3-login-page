<template>
  <div v-if="chainId" class="metamaskinfo">
    <img
      alt="metamask"
      src="../assets/metamask-fox.svg"
      width="68"
      height="60"
    />
    <span>Metamask Chain Id {{ chainId }}</span>
  </div>
  <no-metamask v-else />
</template>
<script>
import { ref } from "vue";
import NoMetamask from "./NoMetamask.vue";
export default {
  components: { NoMetamask },
  name: "MetamaskInfo",
  data() {
    return {};
  },
  setup() {
    const chainId = ref(undefined);
    const account = ref(undefined);
    const provider = window.ethereum;
    if (provider) {
      provider
        .request({
          method: "eth_chainId",
        })
        .then((c_id) => {
          chainId.value = Number(c_id).toString(10);
        });
      provider.on("accountsChanged", (acc) => {
        if (account.value != undefined && account.value != acc) {
          window.location.reload();
        } else {
          account.value = acc;
        }
      });
      provider.on("chainChanged", (chain_id) => {
        if (chainId.value != undefined && chainId.value != chain_id) {
          window.location.reload();
        } else {
          chainId.value = chain_id;
        }
      });
    } else {
      console.error("Please install MetaMask!");
    }
    return {
      account,
      chainId,
      provider,
    };
  },
};
</script>
<style scoped>
.metamaskinfo {
  width: fit-content;
  display: flex;
}
.metamaskinfo span {
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #ffffff;
  line-height: 60px;
}
@media only screen and (max-width: 768px) {
  .metamaskinfo span {
    line-height: 30px;
  }
}
</style>
