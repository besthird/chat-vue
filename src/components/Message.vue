<template>
  <div class="message" ref="message">
    <ul v-if="messages">
      <li v-if="messages[user.id]">
        <div v-for="(val, k) in messages[user.id]" v-bind:key="k">
          <p class="time">
            <span>{{val.time}}</span>
          </p>
          <div class="main" :class="{ self: val.self }">
            <img v-if="!val.self" class="avatar" width="30" height="30" src="../assets/1.jpg" />
            <div class="text">{{ val.content }}</div>
            <img v-if="val.self" class="avatar" width="30" height="30" src="../assets/1.jpg" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "cpmponents-message",
  computed: {
    ...mapGetters(["messages", "user"])
  },
  // 会话列表
  data() {
    return {};
  },
  props: {
    msg: String
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.message.scrollTop = this.$refs.message.scrollHeight;
    });
  },
  methods: {},
  watch: {
    messages(val) {
      console.log(val)
      this.$nextTick(() => {
        this.$refs.message.scrollTop = this.$refs.message.scrollHeight;
      });
    },
    user() {
      this.$nextTick(() => {
        this.$refs.message.scrollTop = this.$refs.message.scrollHeight;
      });
    }
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
