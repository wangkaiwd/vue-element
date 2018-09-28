import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'
import store from '@/store'

import httpServer from './serverConfig'
import { getToken } from './tool'

const instance = axios.create({
  baseURL: httpServer.mockURL,
  timeout: 20000
})
instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'
instance.interceptors.request.use(
  config => {
    const { method, data } = config
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
  },
  error => {
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  response => {
    store.commit('changeWebStatus', false)
    Toast.clear()
    if (response.status === 200) {
      return response.data
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    store.commit('changeWebStatus', true)
    return Promise.reject(error)
  }
)
export default instance
