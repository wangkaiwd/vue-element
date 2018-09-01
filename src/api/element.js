import { ajaxFunc } from '@/request/http'

const element = {}
// 商家信息
element.fetchSeller = ajaxFunc({url: '/seller'})

// 商品信息
element.fetchGoods = ajaxFunc({url: '/goods'})

// 评论信息
element.fetchRatings = ajaxFunc({url: '/ratings'})

export default element
