<template>
  <div class="decentralicationinfo">
    <img alt="Person1" src="../assets/person1.svg" />
    <br />
    <div class="bubble">
      <div class="text-content">
        The decentralization of account login means that your account
        information no longer belongs to some companies, but only to YOU.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DecentralicationInfo",
};
</script>
<style scoped>
.decentralicationinfo {
  margin: 150px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bubble {
  width: 898px;
  height: 81px;
  background: rgba(255, 255, 255, 0.18);
  border-radius: 27px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-content {
  margin: auto;
  display: inline-block;
  vertical-align: middle;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
}
@media only screen and (max-width: 768px) {
  .decentralicationinfo {
    margin: auto;
    height: 200px;
    width: 350px;
  }
  .decentralicationinfo img {
    height: 100px;
  }
  .bubble {
    width: 320px;
    height: 200px;
  }
  .text-content {
    font-size: 16px;
    width: 300px;
  }
}
</style>
