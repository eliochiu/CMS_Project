import http from '../utils/request'

// 请求首页数据
export const getData = () => {
    // 返回一个promise对象
    return http.get('/home/getData')
}

export const getUser = (params) => {
    // 返回一个promise对象
    return http.get('/user/getUser', params);
}

export const addUser = (data) => {
    // 返回一个promise对象
    return http.post('/user/add', data);
}

export const editUser = (data) => {
    // 返回一个promise对象
    return http.post('/user/edit', data);
}

export const deleteUser = (data) => {
    // 返回一个promise对象
    return http.post('/user/delete', data);
}


