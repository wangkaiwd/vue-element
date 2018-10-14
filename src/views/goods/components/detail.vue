<template>
  <div class="goods-detail">
    <div class="goods-detail-wrapper" @click.stop @touchMove.stop>
      <div class="goods-banner border-1px">
        <div class="img-wrapper">
          <img :src="goodsDetail.image" alt="">
          <base-icon @click="closeDetail" class="img-icon" icon="left"></base-icon>
        </div>
        <div class="detail-wrapper">
          <div class="name">{{goodsDetail.name}}</div>
          <div class="text-wrapper">
            <span class="sell-count">月售{{goodsDetail.sellCount}}份</span>
            <span class="rating">好评率{{goodsDetail.rating}}%</span>
          </div>
          <div class="price-wrapper">
            <div class="price">
              <span class="currency">￥</span><span class="present-price">{{goodsDetail.price}}</span>
              <span class="old-price" v-if="goodsDetail.oldPrice">￥{{goodsDetail.oldPrice}}</span>
            </div>
            <div class="join-cart">
              <cart-control class="operation"
                            ref="cartControl"
                            :food="goodsDetail"
                            :position="position"
                            @updateFood="$emit('updateFood',$event)">
              </cart-control>
              <div class="join" v-if="visibleJoinButton" @click="handleJoinClick">
                加入购物车
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="split" v-if="goodsDetail.info"></div>
      <div class="goods-info" v-if="goodsDetail.info">
        <h3>商品评价</h3>
        <p>{{goodsDetail.info}}</p>
      </div>
      <div class="split"></div>
      <goods-comments :tagConfig="tagConfig">
      </goods-comments>
      <div class="ratings-wrapper">
        <ul class="ratings">
          <li v-for="rating in goodsDetail.ratings">
            <p class="desc">
              <span class="date">{{rating.rateTime | formatTime}}</span>
              <span class="user">
              {{rating.username}}
              <img :src="rating.avatar" alt="">
            </span>
            </p>
            <p class="text">
              <base-icon class="thumb-up" icon="thumb-up"></base-icon>
              {{rating.text}}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import CartControl from '@/components/cartControl'
  import GoodsComments from '@/components/comments'
  import { toggleForbidScrollThrough } from '@/utils/compatible'
  import { formatTime } from '@/utils/handleTime'
  import BScroll from 'better-scroll'

  export default {
    name: 'GoodsDetail',
    components: {CartControl, GoodsComments},
    props: {
      goodsDetail: {
        type: Object,
        required: true
      },
      position: {
        type: Object,
        required: false
      }
    },
    data () {
      return {
        tagConfig: [
          {text: '全部', number: 1},
          {text: '推荐', number: 2},
          {text: '吐槽', number: 3}
        ]
      }
    },
    computed: {
      visibleJoinButton () {
        return !(this.goodsDetail.count > 0)
      }
    },
    mounted () {
      this.initScroll()
    },
    filters: {
      formatTime
    },
    methods: {
      closeDetail () {
        this.$emit('update:visibleDetail', false)
        toggleForbidScrollThrough(false)
      },
      initScroll () {
        this.scroll = new BScroll('.goods-detail', {
          click: true
        })
      },
      handleJoinClick () {
        this.$refs.cartControl.plus()
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "~styles/varibale";
  @import "~styles/mixins";

  .goods-detail {
    /*overflow: scroll;*/
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: .96rem;
    .goods-detail-wrapper {
      background-color: #fff;
    }
    .img-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      /*保证图片宽高在屏幕宽高变化的情况下进行等比缩放，并在图片加载的过程中占位，保证页面不会变形*/
      padding-top: 100%;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
    .img-icon {
      position: absolute;
      top: .1rem;
      left: 0;
      width: .8rem;
      height: .8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 20px;
    }
    .name {
      font-size: 14px;
      font-weight: @font-weight-title;
    }
    .text-wrapper {
      margin-top: .16rem;
      font-size: 10px;
      color: rgb(147, 153, 159);
      .sell-count {margin-right: .24rem;}
    }
    .price-wrapper {
      margin-top: .36rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .currency {font-size: 10px;color: rgb(240, 20, 20);}
      .present-price {
        font-size: 14px;font-weight: @font-weight-title;
        color: rgb(240, 20, 20);
      }
      .old-price {
        text-decoration: line-through;
        font-size: 10px;color: rgb(147, 153, 159);
      }
    }
    .detail-wrapper {padding: .36rem;}
    .goods-info {
      padding: .36rem;
      h3 {color: rgb(7, 17, 27);}
      p {
        padding-left: .16rem;
        margin-top: .12rem;
        line-height: .48rem;
        color: rgb(77, 85, 93);
        font-size: 12px;
      }
    }

    .join-cart {
      position: relative;
      width: 1.48rem;
      height: .48rem;
      .join,
      .operation {
        position: absolute;
        top: 0;
        right: 0;
      }
      .join {
        width: 1.48rem;
        height: .48rem;
        border-radius: .24rem;
        background-color: rgb(0, 160, 220);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        color: #fff;
      }
    }
    .ratings-wrapper {
      padding: 0 .36rem;
      li {
        padding: .32rem 0;
        border-bottom: 1px solid @border-color;
      }
      .desc {
        display: flex;
        justify-content: space-between;
        font-size: 10px;
        color: rgb(147, 153, 159);
        img {
          margin-left: .12rem;
          width: .24rem;
          height: .24rem;
        }
      }
      .user {
        display: flex;
        align-items: center;
      }
      .text {
        margin-top: .12rem;
        font-size: 12px;
        color: rgb(7, 17, 27);
      }
      .thumb-up {color: rgb(0, 160, 220);}
      .thumb-down {color: rgb(147, 153, 159);}
    }
  }
</style>
