import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import Goods from '@/views/goods/goods'
import Seller from '@/views/seller/seller'
import Ratings from '@/views/ratings/ratings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
      redirect: '/goods',
      children: [
        {
          path: '/goods',
          name: '商品',
          component: Goods
        },
        {
          path: '/seller',
          name: '商家',
          component: Seller,
        },
        {
          path: '/ratings',
          name: '评论',
          component: Ratings,
        }
      ]
    },
  ]
})
