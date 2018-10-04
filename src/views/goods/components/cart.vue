<template>
  <div class="goods-cart">
    <div class="cart-icon">
      <div class="shop-cart-wrapper">
        <base-icon class="shop-cart" icon="cart"></base-icon>
      </div>
      <span class="price">￥0</span>
    </div>
    <div class="deliver">
      另需配送费￥4元
    </div>
    <div class="pay-money">
      ￥20起送
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsCart'
  }
</script>

<style lang="less" scoped>
  @import '~styles/varibale';

  .goods-cart {
    display: flex;
    height: .96rem;
    width: 100%;
    background-color: #141d27;
    color: rgba(255, 255, 255, .4);
    line-height: .96rem;
    .cart-icon {
      font-size: 16px;
      padding: 0 .24rem;
    }
    .shop-cart-wrapper {
      position: relative;
      z-index: 1;
      float: left;
      width: 1.12rem;
      height: 1.12rem;
      padding: .12rem;
      border-radius: 50%;
      background-color: #141d27;
      text-align: center;
      font-size: 28px;
      margin-top: -.16rem;
      .shop-cart {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #2b343c;
      }
    }
    .price {margin-left: .24rem;font-weight: @font-weight-title;}
    .deliver {
      position: relative;
      flex: 1;
      font-size: 12px;
      padding-left: .24rem;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        vertical-align: top;
        width: 1px;
        height: 60%;
        background-color: rgba(255, 255, 255, .1);
      }
    }
    .pay-money {
      width: 2.1rem;
      height: 100%;
      background-color: #2b333b;
      font-size: 14px;
      text-align: center;
      font-weight: @font-weight-title;
    }
  }
</style>
