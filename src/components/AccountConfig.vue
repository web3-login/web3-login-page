<template>
  <div class="content">
    <h2>Your pages login does not need an NFT, just the Account?</h2>
    <form action="/">
      <label for="authorize">Authorize URI*</label><br />
      <input
        type="text"
        id="authorize"
        name="authorize"
        v-model="authorize_uri"
      /><br />
      <label for="redirect_uri">Redirect URI*</label><br />
      <input
        type="text"
        id="redirect_uri"
        name="redirect_uri"
        v-model="redirect_uri"
      /><br />
      <label for="client_id">Client ID</label><br />
      <input
        type="text"
        id="client_id"
        name="client_id"
        v-model="client_id"
      /><br />
      <label for="scope">Scope</label><br />
      <input type="text" id="scope" name="scope" v-model="scope" /><br />
      <label for="state">State</label><br />
      <input type="text" id="state" name="state" v-model="state" /><br />
      <label for="nonce">Nonce</label><br />
      <input type="text" id="nonce" name="nonce" v-model="nonce" /><br />
      <label for="response_type">Response Type</label><br />
      <input
        type="text"
        id="response_type"
        name="response_type"
        v-model="response_type"
      /><br />
      <label for="response_mode">Response Mode</label><br />
      <input
        type="text"
        id="response_mode"
        name="response_mode"
        v-model="response_mode"
      /><br />

      <br />
      <input id="test-button" type="submit" value="Test Configuration" />
    </form>
    <div class="url">
      <label for="url_text">Your Login Url</label><br />
      <textarea
        id="url_text"
        name="url_text"
        rows="3"
        max-rows="6"
        cols="100"
        :value="url_text()"
      />
      <button v-on:click="copyUrl">Copy Your Login Url</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountConfig",
  data() {
    return {
      authorize_uri: "https://oidc.web3-login.net/authorize",
      redirect_uri: "https://oidcdebugger.com/debug",
      client_id: "random",
      scope: "openid",
      state: "",
      nonce: "random",
      response_type: "code id_token",
      response_mode: "query",
    };
  },
  methods: {
    url_text() {
      const url = new URL(this.authorize_uri);
      url.searchParams.append("redirect_uri", this.redirect_uri);
      url.searchParams.append("client_id", this.client_id);
      url.searchParams.append("scope", this.scope);
      url.searchParams.append("state", this.state);
      url.searchParams.append("nonce", this.nonce);
      url.searchParams.append("response_type", this.response_type);
      url.searchParams.append("response_mode", this.response_type);
      return url.href;
    },
    async copyUrl() {
      await navigator.clipboard.writeText(this.url_text());
    },
  },
  components: {},
};
</script>
<style scoped>
web-3-logo {
  position: absolute;
  left: 2%;
  top: 5%;
}
.content {
  position: relative;
  align-content: center;
  background: #002245;
}
h2 {
  color: white;
}
form {
  margin: auto;
  padding: 20px;
  width: fit-content;
  background: rgba(0, 0, 0, 0.88);
  border-radius: 15px;
}
label {
  margin: 10px 0;
  float: left;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;
}
input,
select,
button {
  margin: 2px;
  background: #e8e8e8;
  border-radius: 7px;
}
#test-button {
  margin: 20px 0;
  width: 100%;
}
button {
  margin: 20px;
}
.url {
  color: white;
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
