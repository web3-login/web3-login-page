<template>
  <div class="bubbleinfo">
    <div class="nft-bubble">
      <h2>NFT Owner</h2>
      <div>
        <ul>
          <li>Sign a verification with their wallet to prove ownership</li>
          <li>Access granted!</li>
        </ul>
      </div>
    </div>
    <div class="provider-bubble">
      <h2>Service provider</h2>
      <div>
        <ul>
          <li>Needs to configure open connect client</li>
          <li>Then they can grant access to the owners of NFT tokens</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BubbleInfo",
};
</script>
<style scoped>
.bubbleinfo {
  margin: 120px auto;
  display: flex;
  width: fit-content;
}
.nft-bubble {
  padding: 25px 10px;
  width: 435px;
  height: 245px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;

  color: #ffffff;

  background-image: url("../assets/bubble1.svg");
  background-repeat: no-repeat;
  background-size: auto;
}
.provider-bubble {
  padding: 25px 0px;
  width: 570px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;

  color: #ffffff;

  background-image: url("../assets/bubble2.svg");
  background-repeat: no-repeat;
  background-size: auto;
}
ul {
  text-align: left;
}
@media only screen and (max-width: 768px) {
  .bubbleinfo {
    margin: 0;
    transform: scale(0.5);
    height: 400px;
    width: 350px;
    align-items: center;
    flex-direction: column;
  }
  .provider-bubble {
    width: 570px;
    height: 240px;
  }
  .nft-bubble {
    width: 435px;
    height: 245px;
  }
}
</style>
