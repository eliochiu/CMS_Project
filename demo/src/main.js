import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './api/mock'
import Cookie from "js-cookie"

Vue.use(ElementUI)

Vue.config.productionTip = false

// 添加全局导航守卫
router.beforeEach((to, from, next) => {
  // 判断token存不存在
  const token = Cookie.get('token');
  // 如果token不存在，并且用户不位于登录页面，说明用户未登录，跳转到登录页面
  if (!token && to.name !== 'login') {
    next({ name: 'login' });
  } else if (token && to.name === 'login') {
    // 如果token存在，并且用户正在登录页面，说明用户已登录，跳转至主页
    next({ name: 'home' });
  } else {
    next();
  }

})

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.commit('addMenu', router);
  }
}).$mount('#app')
