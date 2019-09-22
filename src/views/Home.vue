<template>
  <div>
    <div class="sidebar">
      <Card />
      <list />
    </div>
    <div class="main">
      <message />
      <Send @sendWs="send" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import List from "@/components/List.vue";
import Message from "@/components/Message.vue";
import Send from "@/components/Send.vue";
import { ChatWebSocket } from '@/util/ws'
import { mapGetters } from "vuex";

export default {
  name: "home",
  data() {
    return {
      userVal: {}
    }
  },
  components: {
    Card,
    List,
    Message,
    Send
  },
  computed: {
    ...mapGetters(["messages", "user"])
  },
  mounted() {
    if (this.$route.query.token) {
      let ws = ChatWebSocket.getInstance(this.$route.query.token)
    }
  },
  methods: {
    send(val) {
      let ws = ChatWebSocket.getInstance(this.$route.query.token).send(val, this.userVal)
      
    }
  },
  watch: {
    user(val) {
      this.userVal = val
    }
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