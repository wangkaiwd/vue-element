<template>
  <div class="goods-cart">
    <div class="goods-cart-container" @click="visibleList=!visibleList">
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
    <transition name="slide">
      <div class="goods-cart-modal" v-show="visibleList">
        <div class="goods-list">
          <div class="goods-title">
            <span>购物车</span> <span class="clear">清空</span>
          </div>
          <div class="goods-content">
            <ul>
              <li>list1</li>
              <li>list2</li>
              <li>list3</li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'GoodsCart',
    data () {
      return {
        visibleList: false
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '~styles/varibale';
  @import '~styles/mixins';

  .goods-cart {
    width: 100%;
    .goods-cart-container {
      display: flex;height: .96rem;line-height: .96rem;background-color: #141d27;
      color: rgba(255, 255, 255, .4);
    }
    .cart-icon {font-size: 16px;padding: 0 .24rem;
    }
    .shop-cart-wrapper {
      position: relative;z-index: 1;float: left;width: 1.12rem;height: 1.12rem;
      padding: .12rem;border-radius: 50%;background-color: #141d27;
      text-align: center;font-size: 28px;margin-top: -.16rem;
      .shop-cart {
        position: relative;z-index: 2;display: flex;align-items: center;
        justify-content: center;width: 100%;height: 100%;border-radius: 50%;
        background-color: #2b343c;
      }
    }
    .price {margin-left: .24rem;font-weight: @font-weight-title;}
    .deliver {
      position: relative;flex: 1;font-size: 12px;padding-left: .24rem;
      &::before {
        content: '';position: absolute;top: 50%;left: 0;transform: translateY(-50%);
        vertical-align: top;width: 1px;height: 60%;
        background-color: rgba(255, 255, 255, .1);
      }
    }
    .pay-money {
      width: 2.1rem;height: 100%;background-color: #2b333b;font-size: 14px;
      text-align: center;font-weight: @font-weight-title;
    }
    .goods-cart-modal {
      position: fixed;top: 0;left: 0;width: 100%;bottom: .96rem;
      background-color: rgba(7, 17, 27, 0.6);color: #07111b;
      overflow: hidden;
    }
    .slide-enter,
    .slide-leave-to {
      opacity: 0;
      .goods-list {
        transform: translateY(100%);
      }
    }
    .slide-enter-active,
    .slide-leave-active {
      transition: all .6s;
      .goods-list {transition: all .6s;}
    }
    .goods-list {
      position: absolute;left: 0;bottom: 0;width: 100%;
      background-color: #fff;
      transform: translateY(0);
    }
    .goods-title {
      display: flex;
      justify-content: space-between;
      background-color: #f3f5f7;
      height: .8rem;
      line-height: .8rem;
      padding: 0 .36rem;
      .border-1px(@border-color);
      .clear {
        font-size: 12px;
        color: @blue;
      }
    }
  }
</style>
