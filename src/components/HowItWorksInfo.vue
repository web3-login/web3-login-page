<template>
  <div class="howcontent">
    <div class="person">
      <img alt="Person 2" src="../assets/person2.svg" />
      <div class="person-text">
        Access is not linked to an individual- but to a possession of a
        credential in form of an NFT
      </div>
    </div>
    <div class="stack">
      Websites
      <img alt="Website" src="../assets/layergreen.svg" />
      Web3-Login
      <img alt="Web3 Login" src="../assets/layerorange.svg" />
      NFT
      <img alt="NFT" src="../assets/layerred.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HowItWorksInfo",
};
</script>
<style scoped>
.howcontent {
  display: flex;
  margin: 100px auto;
  align-items: center;
  width: fit-content;
}
.person {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 60px;
}
.person-text {
  width: 570px;
  height: 66px;

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;

  color: #ffffff;
}
.stack {
  width: 510px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  /* identical to box height */

  color: #ffffff;
}
@media only screen and (max-width: 768px) {
  .howcontent {
    display: block;
    margin: auto;
    transform: scale(0.5);
    height: 300px;
    width: 350px;
    align-items: center;
  }
  .person {
    margin: auto;
    width: 80%;
  }
  .person img {
    width: 300px;
  }
  .person-text {
    margin: 10px;
    width: 400px;
    min-height: 66px;
  }
  .stack {
    width: 300px;
  }
  .stack img {
    width: 300px;
  }
}
</style>
