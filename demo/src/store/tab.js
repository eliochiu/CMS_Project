import Cookie from 'js-cookie'
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
    ],
    menu: []
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
    },

    // 设置menu的数据
    setMenu(state, val) {
      state.menu = val;
      Cookie.set('menu', JSON.stringify(val));
    },

    // 动态注册路由
    addMenu(state, router) {
      // 判断缓存中是否有数据，不存在不操作
      if (!Cookie.get('menu')) return;
      // 更新当前数据
      const menu = JSON.parse(Cookie.get('menu'));
      state.menu = menu;
      // 组装路由
      const menuArray = [];
      menu.forEach(item => {
        if (item.children) {
          item.children = item.children.map(item => {
            item.component = () => import(`../views/${item.url}`);
            return item;
          });
          menuArray.push(...item.children);
        } else {
          item.component = () => import(`../views/${item.url}`);
          menuArray.push(item)
        }
      });
      console.log(menuArray);
      // 路由添加
      menuArray.forEach(item => {
        router.addRoute('main', item);
      });


    }
  },

  actions: {

  },
  modules: {

  }
}