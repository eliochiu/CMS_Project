<template>
  <div class="header-container">
    <div class="left-container">
      <el-button
        icon="el-icon-menu"
        size="mini"
        @click="handleMenu"
      ></el-button>
      <!-- 面包屑 -->
      <span class="text">首页</span>
    </div>
    <div class="right-container">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img src="../assets/images/user.png" alt="userImage" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleMenu() {
      this.$store.commit('changeCollapse')
    }
  },

  computed: {},
};
</script>

<style lang="less" scoped>
.header-container {
  padding: 0 20px;
  background-color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text {
    color: #fff;
    font-size: 14px;
    margin-left: 15px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>