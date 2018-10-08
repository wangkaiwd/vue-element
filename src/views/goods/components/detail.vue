<template>
  <div class="goods-detail">
    <div class="goods-banner">
      <div class="img-wrapper">
        <base-icon class="img-icon" icon="left"></base-icon>
        <img :src="goodsDetail.image" alt="">
      </div>
      <div class="detail-wrapper">
        <div class="name"></div>
        <div class="text-wrapper">
          <span class="sell-count"></span>
          <span class="rating"></span>
        </div>
        <div class="price-wrapper">
          <div class="price">￥{{goodsDetail.price}}</div>
          <cart-control :food="goodsDetail">
          </cart-control>
        </div>
      </div>
    </div>
    <div class="goods-info"></div>
    <div class="goods-comment"></div>
  </div>
</template>

<script>
  import CartControl from '@/components/cartControl'

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
    }
  }
</script>

<style lang="less" scoped>
  .goods-detail {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: .96rem;
    background-color: red;
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
    .price-wrapper {
      display: flex;
    }
  }
</style>
