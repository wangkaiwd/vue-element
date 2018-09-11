import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'
import store from '@/store'

let pending = [] //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let timerId = null
let cancelToken = axios.CancelToken
let removePending = (config) => {
  for (let p in pending) {
    if (pending[p].u === config.url + '&' + config.method) { //当当前请求在数组中存在时执行函数体
      pending[p].f('请求过于频繁！') //执行取消操作
      pending.splice(p, 1) //把这条记录从数组中移除
    }
  }
  timerId && clearTimeout(timerId)
  timerId = setTimeout(() => {
    pending = []
  }, 200)
}
/**
 * 判断本地存储中的token是否存在，从而在请求头中携带
 * @returns {string} [返回localStorage中的token,或者返回'']
 */
const getToken = () => {
  var userInfo = localStorage.getItem('user') || ''
  let token
  if (userInfo) {
    token = JSON.parse(userInfo).user_token
  }
  return token ? token : ''
}

const instance = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5b838e2a445175634e4dbe20/element',
  timeout: 20000,
})
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截
instance.interceptors.request.use((config) => {
  // console.log('请求成功', config)
  const {method, data} = config
  removePending(config)
  config.cancelToken = new cancelToken((c) => {
    // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
    pending.push({u: config.url + '&' + config.method, f: c})
  })
  if (method === 'post') {
    config.data = qs.stringify(data)
  }
  const token = getToken()
  token && (config.headers['user_token'] = token)
  Toast.loading({
    mask: true,
    message: '加载中...'
  })
  return config
}, (error) => {
  return Promise.reject(error)
})
//
// 响应拦截
instance.interceptors.response.use(function (response) {
  store.commit('changeWebStatus', false)
  // console.log('响应成功', response)
  Toast.clear()
  // Do something with response data
  if (response.status === 200) {
    // if (response.data.code === 0) {
    //   return response.data
    // }
    // if (response.data.code !== 0) {
    //   return Promise.reject(response.data)
    // }
    return response.data
  } else {
    return Promise.reject(response)
  }
}, function (error) {
  // Toast('响应失败了，请刷新页面重试！！');
  store.commit('changeWebStatus', true)
  // console.error('响应失败', error);
  // 这里可以用来处理断网情况，包括超时和请求路径失败等
  return Promise.reject(error)
})

/**
 * 提前定义接口路径，请求方法和是否需要短提示
 * @param url {String} 请求地址
 * @param method {String} 请求方式
 * @param needTip {Boolean} 是否需要短提示
 * @returns {Function} 返回调用接口函数
 */
export const ajaxFunc = ({url, method = 'post', needTip = true}) => {
  const errorFunc = err => {
    // console.log('请求成功-失败', err)
    if (err.msg) {
      needTip && Toast(err.msg)
    }
    // err.message && Toast(err.message)
  }
  /**
   * 发起get或post请求
   * @param params {Object} 请求参数
   * @param success {Function} 成功回调
   * @param error {Function} 失败回调
   */
  return (params, success, error = errorFunc) => {
    let value
    method === 'post' ? value = params : value = {params}
    // value.cancelToken = source.token
    instance[method](url, value)
      .then(
        res => success(res),
        err => error(err)
      )
  }

}
// USER_TOKEN_NULL(10000, "user_token为空"),
// USER_PUSH_ID_NULL(10000, "push_userid为空"),
// APP_DEVICE_NULL(10000, "app_device为空"),
// USER_TOKEN_INVALID(10001, "登录信息过期或已失效，请登录！"),
// USER_TOKEN_NON_EXISTENT(10002, "user_token不存在"),
/**
 * 对code进行统一处理：
 * @param code {Number} 后端返回的code
 */
const handleErrorCode = (code) => {
  switch (code) {
    case 10000:
      break
    case 10001:
      break
    case 10002:
      break
  }
}
