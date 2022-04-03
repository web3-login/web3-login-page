<template>
  <div class="content">
    <h2>OpenID Connect Config for your Webpage</h2>

    <form action="/">
      <label for="authorize">Authorize URI (required)</label><br />
      <input
        type="text"
        id="authorize"
        name="authorize"
        value="https://oidc.web3-login.net/nft/default/authorize"
      /><br />
      <label for="redirect_uri">Redirect URI (required)</label><br />
      <input
        type="text"
        id="redirect_uri"
        name="redirect_uri"
        value="https://oidcdebugger.com/debug"
      /><br />
      <label for="client_id">Client ID (not required)</label><br />
      <input type="text" id="client_id" name="client_id" value="0x3B8270447b913d0b935e09d1C2daEc3F5CDD968f" /><br />
      <label for="scope">Scope (required)</label><br />
      <input type="text" id="scope" name="scope" value="openid" /><br />
      <label for="state">State</label><br />
      <input type="text" id="state" name="state" value="" /><br />
      <label for="nonce">Nonce</label><br />
      <input type="text" id="nonce" name="nonce" value="random" /><br />
      <label for="response_type">Response Type</label><br />
      <input type="text" id="response_type" name="response_type" value="code" /><br />
      <label for="response_mode">Response Mode</label><br />
      <input type="text" id="response_mode" name="response_mode" value="form_post" /><br />
      <label for="realm">Realm</label><br />
      <input type="text" id="realm" name="realm" value="kovan" /><br />
      <label for="contract">NFT Contract</label><br />
      <input type="text" id="contract" name="contract" value="0x3B8270447b913d0b935e09d1C2daEc3F5CDD968f" /><br />

      <br />
      <input type="submit" value="Test Configuration" />
    </form>
  </div>
</template>

<script>
export default {
  name: "MainView",
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
  width: fit-content;
  background: lightgray;
}
</style>
