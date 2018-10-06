<template>
  <div class="goods-cart">
    <div class="goods-cart-container"
         @click="showCartList">
      <div class="cart-icon">
        <div class="shop-cart-wrapper">
          <div class="badge" :class="" v-show="totalCount>0">
            {{totalCount}}
          </div>
          <base-icon :class="highlight"
                     class="shop-cart"
                     icon="cart">

          </base-icon>
        </div>
        <span class="price" :class="highlight">￥{{totalPrice}}</span>
      </div>
      <div class="deliver">
        另需配送费￥{{deliveryPrice}}元
      </div>
      <div class="pay-money" :class="payEnough">
        {{payDesc}}
      </div>
    </div>
    <transition name="slide">
      <div class="goods-cart-modal" v-if="selectFood.length>0" v-show="visibleList">
        <div class="goods-list">
          <div class="goods-title">
            <span>购物车</span> <span class="clear">清空</span>
          </div>
          <div class="goods-content">
            <ul>
              <li v-for="(item,i) in selectFood" :key="i">
                {{item.name}}
                <div class="right-wrapper">
                  <span class="currency">￥</span><span class="cart-price">{{item.price}}</span>
                  <cart-control @updateFood="$emit('updateSelectFood',$event,i)"
                                :food="item"
                                :expand="true"></cart-control>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import cartControl from '@/components/cartControl'
  import BScroll from 'better-scroll'

  export default {
    name: 'GoodsCart',
    props: {
      selectFood: {
        type: Array,
        required: true
      },
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 20
      }
    },
    components: {cartControl},
    data () {
      return {
        visibleList: false,
      }
    },
    computed: {
      payDesc () {
        let text
        if (this.totalPrice > this.minPrice) {
          text = '去结算'
        }
        if (this.totalPrice < this.minPrice) {
          text = `还差￥${this.minPrice - this.totalPrice}元起送`
        }
        if (this.totalPrice === 0) {
          text = `￥${this.minPrice}起送`
        }
        return text
      },
      highlight () {
        return {
          highlight: this.totalCount > 0
        }
      },
      payEnough () {
        return {
          'pay-enough': this.payDesc === '去结算'
        }
      },
      totalCount () {
        let result = 0
        // reduce不能操作空数组
        if (this.selectFood.length) {
          result = this.selectFood.reduce((count, item) => count + item.count, 0)
        }
        return result
      },
      totalPrice () {
        let result = 0
        this.selectFood.map(item => result += item.price * item.count)
        return result
      }
    },
    mounted () {

    },
    methods: {
      showCartList () {
        if (this.selectFood.length > 0) {
          this.visibleList = !this.visibleList
          this.$nextTick(() => {
            this.scroll = new BScroll('.goods-content', {
              click: true
            })
          })
        }
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
    .cart-icon {font-size: 16px;padding: 0 .24rem;}
    .badge {
      position: absolute;
      z-index: 3;
      top: 0;
      right: 0;
      width: .48rem;
      height: .3rem;
      background-color: rgb(240, 20, 20);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .4);
      border-radius: .12rem;
      font-size: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
    .shop-cart-wrapper {
      position: relative;z-index: 1;float: left;width: 1.12rem;height: 1.12rem;
      padding: .12rem;border-radius: 50%;background-color: #141d27;
      text-align: center;font-size: 28px;margin-top: -.16rem;
      .shop-cart {
        position: relative;z-index: 2;display: flex;align-items: center;
        justify-content: center;width: 100%;height: 100%;border-radius: 50%;
        background-color: #2b343c;
        &.highlight {color: #fff;background-color: #00a0dc;}
      }
    }
    .price {margin-left: .24rem;font-weight: @font-weight-title;
      &.highlight {color: #fff;}
    }
    .deliver {
      position: relative;flex: 1;font-size: 12px;padding-left: .24rem;
      &::before {
        content: '';position: absolute;top: 50%;left: 0;transform: translateY(-50%);
        vertical-align: top;width: 1px;height: 60%;
        background-color: rgba(255, 255, 255, .1);
      }
    }
    .pay-money {
      width: 2.1rem;height: 100%;background-color: #2b333b;font-size: 12px;
      text-align: center;font-weight: @font-weight-title;
      &.pay-enough {
        background-color: #00b43c;color: #fff;
      }
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
    .goods-content {
      padding: 0 .36rem;
      max-height: 4.43rem;
      overflow: hidden;
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: .96rem;
      }
      .right-wrapper {
        display: flex;
        align-items: center;
      }
      .cart-price {
        font-size: 14px;
        margin-right: .24rem;
        font-weight: bold;
        color: rgb(240, 20, 20);
      }
      .currency {font-size: 10px;color: rgb(240, 20, 20);}
    }
  }
</style>