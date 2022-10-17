import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Container, Header, Aside, Main, Menu, Submenu, MenuItem, MenuItemGroup, Button, Dropdown, DropdownItem, DropdownMenu } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
