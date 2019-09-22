<template>
  <div class="list">
    <ul>
      <li v-for="(item, index) in sessions" @click="selectSession(item.id)" v-bind:key="index">
        <img class="avatar" width="30" height="30" :alt="item.user.name" src="../assets/1.jpg" />
        <p class="name">{{item.user.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      // 会话列表
      sessions: [
        {
          id: 1,
          user: {
            name: "示例介绍",
          },
        },
        {
          id: 2,
          user: {
            name: "webpack",
          },
        }
      ]
    };
  },
  props: {
    msg: String
  },
  methods: {
    selectSession() {}
  }
};
</script>

<style scoped>
.list li {
  padding: 12px 15px;
  border-bottom: 1px solid #292c33;
  cursor: pointer;
  transition: background-color 0.1s;
  list-style: none;
}
.list li:hover {
  background-color: rgba(255, 255, 255, 0.03);
}
.list li:active {
  background-color: rgba(255, 255, 255, 0.1);
}

.avatar,
.name {
  vertical-align: middle;
}
.avatar {
  border-radius: 2px;
}
.name {
  display: inline-block;
  margin: 0 0 0 15px;
}
</style>
