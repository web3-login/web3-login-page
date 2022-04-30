<template>
  <div class="storycontent">
    <div class="row">
      <img src="../assets/story1.svg" />
      <img src="../assets/story2.svg" />
    </div>
    <div class="row">
      <img src="../assets/story3.svg" />
      <img src="../assets/story4.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "StoryComp",
};
</script>
<style scoped>
.storycontent {
  margin: 100px auto;
}
.row {
  margin: auto;
  display: flex;
  width: fit-content;
}
.row img {
  margin: 25px;
}
@media only screen and (max-width: 768px) {
  .storycontent {
    margin: auto;
    display: block;
    height: 1000px;
    width: 350px;
    align-items: center;
  }
  .row {
    display: block;
    width: 300px;
    height: 400px;
  }
  .row img {
    width: 300px;
    height: 200px;
    margin: auto;
  }
}
</style>
