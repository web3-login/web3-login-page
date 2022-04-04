<template>
  <div v-if="provider" v-on:click="buttonClicked" class="content">Login</div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "LoginButton",
  methods: {
    async signMessage() {
      const accounts = await this.provider.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      const message = "" + account + ";" + encodeURIComponent(this.nonce);
      var signature = await this.provider.request({
        method: "personal_sign",
        params: [account, message],
      });
      return { account, message, signature };
    },
    async login({ account, message, signature }) {
      const queryString = window.location.search;
      console.log(message);
      console.log(signature);
      console.log(this.chainId);
      const urlParams = new URLSearchParams(queryString);
      urlParams.set("account", encodeURIComponent(account));
      urlParams.set("chain_id", this.chainId);
      urlParams.set("signature", encodeURIComponent(signature));

      const query = `${urlParams.toString()}`;
      console.log(query);
      window.open(
        process.env.VUE_APP_OIDC_WEB3_LOGIN_HOST + "/nft/authorize?" + query,
        "_self"
      );
    },
    async buttonClicked() {
      const signature = await this.signMessage();
      console.log(signature);
      await this.login(signature);
    },
  },
  setup() {
    const chainId = ref("");
    const provider = window.ethereum;
    const search = window.location.search;
    const contract = new URLSearchParams(search).get("contract");
    const nonce = new URLSearchParams(search).get("nonce");
    if (provider) {
      provider
        .request({
          method: "eth_chainId",
        })
        .then((c_id) => {
          chainId.value = Number(c_id).toString(10);
        });
    }
    return {
      chainId,
      provider,
      contract,
      nonce,
    };
  },
};
</script>
<style scoped>
.content {
  margin: 10px;
  width: 141px;
  height: 52px;

  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 19px;

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 29px;
  line-height: 52px;

  color: #000000;

  text-decoration: none;
  cursor: pointer;
}
</style>
