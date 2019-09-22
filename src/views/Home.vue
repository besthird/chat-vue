<template>
  <div class="sidebar">
    <Card />
    <list />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import List from "@/components/List.vue";

export default {
  name: "home",
  components: {
    Card,
    List
  }
};
</script>

<style scoped>
.sidebar,
.main {
  height: 100%;
}
.sidebar {
  float: left;
  width: 200px;
  color: #f4f4f4;
  background-color: #2e3238;
}
.main {
  position: relative;
  overflow: hidden;
  background-color: #eee;
}
.text {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}
.message {
  height: ~"calc(100% - 160px)";
}
</style>