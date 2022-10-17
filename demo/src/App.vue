<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Main from "./views/Main.vue";
export default { components: { Main } };
</script>

<style lang="less">
html,
body,
h3,
p {
  margin: 0;
  padding: 0;
}
</style>
