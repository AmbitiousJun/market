import axios from 'axios'

// 创建一个axios实例，封装请求接口
export default function(config) {
  // 使用黑马优购的接口
  const instance = axios.create({
    baseURL: 'https://api-hmugo-web.itheima.net/api/public/v1',
    timeout: 5000
  })

  // 请求拦截器
  instance.interceptors.request.use(config => {
    // 将用户发送请求的配置拦截下来
    return config
  }, err => {
    console.log(err);
  })

  // 响应拦截器
  instance.interceptors.response.use(res => {
    // 从服务器请求到的数据
    return res.data
  }, err => {
    console.log(err);
  })

  // 返回实例，让调用者能够处理回调Promise
  return instance(config)
}