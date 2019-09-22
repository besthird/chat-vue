<template>
  <div class="list">
    <ul v-if="users">
      <li v-for="(item, index) in users" @click="selectSession(item)" v-bind:key="index" :class="{ active: user && item.id === user.id }">
        <img class="avatar" width="30" height="30" :alt="item.name" src="../assets/1.jpg" />
        <p class="name">{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "list",
  computed: {
    ...mapGetters(["users", "user"])
  },
  data() {
    return {
      
    };
  },
  mounted() {
  },
  props: {
  },
  methods: {
    selectSession(item) {
      this.$store.commit('SET_USER_ID', item)
    }
  },
  watch: {
    users (newUser, oldUser) {
      // console.log(newUser)
    }
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
.list .active {
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
