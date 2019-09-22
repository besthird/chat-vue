<template>
  <div class="send">
    <textarea placeholder="按 Ctrl + Enter 发送" v-model="content" @keyup="onKeyup"></textarea>
  </div>
</template>

<script>
export default {
  name: "send",
  data() {
    return {
      content: ''
    };
  },
  props: {
    msg: String
  },
  methods: {
    onKeyup(e) {
      if (e.ctrlKey && e.keyCode === 13 && this.content.length) {
        this.content = "";
      }
    }
  }
};
</script>

<style scoped>
.send {
  height: 160px;
  border-top: solid 1px #ddd;
}
.send textarea {
  padding: 10px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  font-family: "Micrsofot Yahei";
  resize: none;
}
</style>
