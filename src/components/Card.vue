<template>
  <div class="card">
    <header>
      <img class="avatar" width="40" height="40" src="../assets/1.jpg" />
      <p class="name">小林</p>
    </header>
    <footer>
      <input class="search" type="text" placeholder="search user..." />
    </footer>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    msg: String
  },
  methods: {
    keyup(e) {
      console.log(e.target.value);
    }
  }
};
</script>

<style scoped>
.card {
  padding: 12px;
  border-bottom: solid 1px #24272c;
}
.card footer {
  margin-top: 10px;
}

.card .avatar,
.card .name {
  vertical-align: middle;
}
.card .avatar {
  border-radius: 2px;
}
.card .name {
  display: inline-block;
  margin: 0 0 0 15px;
  font-size: 16px;
}
.card .search {
  padding: 0 10px;
  font-size: 12px;
  color: #fff;
  height: 30px;
  line-height: 30px;
  border: solid 1px #3a3a3a;
  border-radius: 4px;
  outline: none;
  background-color: #26292e;
}
</style>
