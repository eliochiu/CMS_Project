export default {
  state: {
    isCollapse: false,
    tabList: [
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "s-home",
        url: "Home/Home",
      },
    ]
  },
  getters: {

  },

  mutations: {
    // 修改菜单折叠状态的方法
    changeCollapse(state) {
      state.isCollapse = !state.isCollapse;
    },

    // 更新面包屑数据
    selectMenu(state, val) {
      if (val.name !== 'home') {
        const index = state.tabList.findIndex(item => item.name === val.name);
        if (index === -1) {
          state.tabList.push(val);
        }
      }
    },
    
    // 删除面包屑数据
    closeTag(state, item) {
      const index = state.tabList.findIndex(val => val.name === item.name);
      state.tabList.splice(index, 1);
    }
  },

  actions: {

  },
  modules: {

  }
}