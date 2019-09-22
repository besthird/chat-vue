<template>
  <div>
    <div class="sidebar">
      <Card />
      <list />
    </div>
    <div class="main">
      <message />
      <Send />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import List from "@/components/List.vue";
import Message from "@/components/Message.vue";
import Send from "@/components/Send.vue";

export default {
  name: "home",
  components: {
    Card,
    List,
    Message,
    Send
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
  height: 600px;
  color: #f4f4f4;
  background-color: #2e3238;
}
.main {
  height: 600px;
  position: relative;
  overflow: hidden;
  display: flex;
  
  flex-direction: column;
}
.text {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}
.message {
  background-color: #eee;
  flex: 1;
}
.send {
  height: 160px;
}
</style>