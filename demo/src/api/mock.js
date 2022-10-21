import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import userApi from './mockServeData/user'
import permissionApi from './mockServeData/permission'

// 定义mock请求拦截
// 获取数图表数据
Mock.mock('/api/home/getData', homeApi.getStatisticalData);

// 添加用户
Mock.mock('/api/user/add', 'post', userApi.createUser);

// 编辑用户
Mock.mock('/api/user/edit', 'post', userApi.updateUser);

// 删除用户
Mock.mock('/api/user/delete', 'post', userApi.deleteUser);

// 获得用户列表
Mock.mock(/\/api\/user\/getUser/, userApi.getUserList);

// 登录接口
Mock.mock(/\/api\/permission\/getMenu/, permissionApi.getMenu);
