<template>
  <div class="goods-detail">
    <div class="goods-detail-wrapper">
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
      <div class="split"></div>
      <div class="goods-info">
        <h3>商品评价</h3>
        <p>{{goodsDetail.info}}</p>
      </div>
      <div class="split"></div>
      <div class="goods-comment">
        <h3>商品评论</h3>
      </div>
    </div>
  </div>
</template>

<script>
  import CartControl from '@/components/cartControl'
  import { toggleForbidScrollThrough } from '@/utils/compatible'
  import BScroll from 'better-scroll'

  export default {
    name: 'GoodsDetail',
    components: {CartControl},
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
      return {}
    },
    computed: {
      visibleJoinButton () {
        return !(this.goodsDetail.count > 0)
      }
    },
    mounted () {
      this.initScroll()
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
    .goods-comment {padding: .36rem;}
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
  }
</style>
