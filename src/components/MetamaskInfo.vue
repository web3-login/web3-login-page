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
    const chainId = ref("");
    const provider = window.ethereum;
    if (provider) {
      provider
        .request({
          method: "eth_chainId",
        })
        .then((c_id) => {
          chainId.value = Number(c_id).toString(10);
        });
      provider.on("accountsChanged", () => {
        window.location.reload();
      });
      provider.on("chainChanged", () => {
        window.location.reload();
      });
    } else {
      console.error("Please install MetaMask!");
    }
    return {
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
</style>
