<template>
  <div class="tabs">
    <el-tag
      v-for="(item, index) in tags"
      :key="item.path"
      :closable="item.name !== 'home'"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      @click="changeMune(item)"
      @close="handlerClose(item, index)"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "common-tag",
  data() {
    return {};
  },

  computed: {
    ...mapState({
      tags: (state) => state.tab.tabList,
    }),
  },

  methods: {
    ...mapMutations(["closeTag"]),
    changeMune(item) {
      this.$router.push({ name: item.name });
    },

    handlerClose(item, index) {
      // 删除store中的数据
      this.closeTag(item);
      const length = this.tags.length;
      // 如果删除的tag和当前路由的tag不一致，不做任何操作
      console.log(index, length);
      if (item.name !== this.$route.name) {
        return;
      }
      // 如果删除最后一项，高亮会向左跳动
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name
        });
      } else {
        this.$router.push({
          name: this.tags[index].name
        });
      }

      // 如果删除的
    },
  },
};
</script>

<style lang="less" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>