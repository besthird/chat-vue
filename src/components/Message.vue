<template>
  <div class="message" ref="message">
    <ul v-if="messages">
      <li v-for="(item, index) in messages" v-bind:key="index">
        <p class="time">
          <span>{{item.time}}</span>
        </p>
        <div class="main" :class="{ self: item.self }">
          <img v-if="!item.self" class="avatar" width="30" height="30" src="../assets/1.jpg" />
          <div class="text">{{ item.content }}</div>
          <img v-if="item.self" class="avatar" width="30" height="30" src="../assets/1.jpg" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "message",
  data() {
    return {
      // 会话列表
      messages: [
        {
          content:
            "你是笨蛋",
          time: '2019',
          self: true
        }, {
          content: "你是傻瓜",
          time: '2019'
        }
      ]
    };
  },
  props: {
    msg: String
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.message.scrollTop = this.$refs.message.scrollHeight;
    })
  },
  methods: {
  }
};
</script>

<style scoped>
.message {
  padding: 10px 15px;
  overflow-y: scroll;
}
.message li {
  margin-bottom: 15px;
  list-style: none;
}
.message .main {
  display: flex;
  flex-direction: row;
}
.message .time {
  margin: 7px 0;
  text-align: center;
}
.message .time > span {
  display: inline-block;
  padding: 0 18px;
  font-size: 12px;
  color: #fff;
  border-radius: 2px;
  background-color: #dcdcdc;
}
.message .avatar {
  float: left;
  margin: 0 10px 0 0;
  border-radius: 3px;
}
.message .text {
  display: inline-block;
  position: relative;
  padding: 0 10px;
  max-width: calc(100% - 40px);
  min-height: 30px;
  line-height: 2.5;
  font-size: 12px;
  text-align: left;
  word-break: break-all;
  background-color: #fafafa;
  border-radius: 4px;
}
.message .text:before {
  content: " ";
  position: absolute;
  top: 9px;
  right: 100%;
  border: 6px solid transparent;
  border-right-color: #fafafa;
}
.message .self {
  text-align: right;
  justify-content: flex-end;
}
.message .self .avatar {
  float: right;
  margin: 0 0 0 10px;
}
.message .self .text {
  background-color: #b2e281;
}
.message .self:before {
  right: inherit;
  left: 100%;
  border-right-color: transparent;
  border-left-color: #b2e281;
}
</style>
