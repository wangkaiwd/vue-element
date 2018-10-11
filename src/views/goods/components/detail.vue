<template>
  <div class="goods-detail">
    <div class="goods-banner border-1px">
      <div class="img-wrapper">
        <base-icon @click="closeDetail" class="img-icon" icon="left"></base-icon>
        <img :src="goodsDetail.image" alt="">
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
          <cart-control :food="goodsDetail"
                        :position="position"
                        @updateFood="$emit('updateFood',$event)">
          </cart-control>
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
</template>

<script>
  import CartControl from '@/components/cartControl'
  import { toggleForbidScrollThrough } from '@/utils/compatible'

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
    methods: {
      closeDetail () {
        this.$emit('update:visibleDetail', false)
        toggleForbidScrollThrough(false)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "~styles/varibale";
  @import "~styles/mixins";

  .goods-detail {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: .96rem;
    background-color: #fff;
    overflow: scroll;
    .img-wrapper {position: relative;}
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
    .split {
      height: .32rem;
      border-top: 1px solid @border-color;
      border-bottom: 1px solid @border-color;
      background-color: #f3f5f7;
    }
  }
</style>
