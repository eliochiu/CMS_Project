<template>
  <div class="header-container">
    <div class="left-container">
      <el-button
        style="margin-right: 10px"
        icon="el-icon-menu"
        size="mini"
        @click="handleMenu"
      ></el-button>
      <!-- 面包屑 -->
      <span class="text">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            v-for="item in tags"
            :key="item.name"
            :to="{ path: item.path }"
          >
            {{ item.label }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </span>
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
import { mapState } from "vuex";
export default {
  name: "common-header",
  methods: {
    handleMenu() {
      this.$store.commit("changeCollapse");
    },
  },

  computed: {
    ...mapState({
      tags: (state) => state.tab.tabList,
    }),
  },
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

  .left-container {
    display: flex;
    align-items: center;
    /deep/ .el-breadcrumb__item {
      .el-breadcrumb__inner {
        font-weight: normal;
        &.is-link {
          color: #666;
        }
      }

      &:last-child {
        .el-breadcrumb__inner {
          color: #fff;
        }
      }
    }
  }
}
</style>