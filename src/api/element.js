import { ajaxFunc } from '@/request/http'

const element = {}
// 商家信息
element.fetchSeller = ajaxFunc('/seller')

// 商品信息
element.fetchGoods = ajaxFunc('/goods')

// 评论信息
element.fetchRatings = ajaxFunc('/ratings')

export default element
