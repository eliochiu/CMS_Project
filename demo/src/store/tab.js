export default {
  state: {
    isCollapse: false
  },
  getters: {

  },

  mutations: {
    // 修改菜单折叠状态的方法
    changeCollapse(state) {
      state.isCollapse = !state.isCollapse;
      console.log(state.isCollapse)
    }
  },

  actions: {

  },
  modules: {

  }
}