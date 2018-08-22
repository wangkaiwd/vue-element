import axios from 'axios';
import qs from 'qs';
import { Toast } from 'vant';

const getToken = () => {
  var userInfo = localStorage.getItem('user') || '';
  let token;
  if (userInfo) {
    token = JSON.parse(userInfo).user_token;
  }
  return token ? token : '';
};

const instance = axios.create({
  baseURL: 'https://oss.inglemirepharm.com/api_vip/',
  timeout: 20000,
  headers: {
    'app_device': 1,
    'push_userid': '0',
    // 'Content-Type': 'application/x-www-form-urlencoded'
  }
});
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  const token = getToken();
  token && (config.headers['user_token'] = token);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
//
// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Do something with response data
  console.log('res', response);
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

instance.get('/common/get_advert_list', {
  params: {
    advert_type: 'all'
  }
}).then((res) => {
  console.log('响应', res);
});

