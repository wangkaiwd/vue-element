import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import Goods from '@/views/goods/goods'
import Seller from '@/views/seller/seller'
import Ratings from '@/views/ratings/ratings'
import Demo from '@/views/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: '首页',
      component: Home,
      redirect: '/home/goods',
      children: [
        {
          path: '/home/goods',
          name: '商品',
          component: Goods
        },
        {
          path: '/home/seller',
          name: '商家',
          component: Seller
        },
        {
          path: '/home/ratings',
          name: '评论',
          component: Ratings
        }
      ]
    },
    {
      path: '/demo',
      name: '测试',
      component: Demo
    }
  ],
})
