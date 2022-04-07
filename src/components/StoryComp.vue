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
</style>
