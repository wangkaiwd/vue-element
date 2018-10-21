<template>
  <div class="seller">
    <div class="seller-top">
      <div class="collect">
        <div class="name">{{seller.name}}</div>
        <div class="rating-star">
          <goods-rating :size="36"></goods-rating>
          <span class="number">({{seller.ratingCount}})</span>
          <span class="month-sale">月售{{seller.sellCount}}单</span>
        </div>
        <div class="collect-icon">
          <base-icon @click="loveActive=!loveActive"
                     class="love"
                     :class="{active:loveActive}"
                     icon="love">
          </base-icon>
          <p>{{isCollect}}</p>
        </div>
      </div>
      <div class="deliver">
        <ul class="deliver-price">
          <li>
            <p>起送价</p>
            <p><span>{{seller.minPrice}}</span>元</p>
          </li>
          <li>
            <p>商家配送</p>
            <p><span>{{seller.deliveryPrice}}</span>元</p>
          </li>
          <li>
            <p>平均配送时间</p>
            <p><span>{{seller.deliveryTime}}</span>元</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="split"></div>
    <div class="activity">
      <h3 class="title">公告与活动</h3>
      <div class="content">
        {{seller.bulletin}}
      </div>
      <seller-list v-if="seller.supports"
                   :list-data="seller.supports">
      </seller-list>
    </div>
    <div class="split"></div>
    <div class="scene">
      <h3 class="title">商家实景</h3>
      <div class="gallery">

      </div>
    </div>
    <div class="split"></div>
    <div class="info">
      <h3 class="title">商家信息</h3>
      <seller-list :list-data="sellerInfo"></seller-list>
    </div>
  </div>
</template>

<script>
  import GoodsRating from '@/components/rating2'
  import SellerList from './components/list'

  export default {
    name: 'seller',
    props: {
      seller: {
        type: Object,
        required: true
      }
    },
    components: {SellerList, GoodsRating},
    data () {
      return {
        loveActive: false,
      }
    },
    computed: {
      isCollect () {
        return this.loveActive ? '已收藏' : '收藏'
      },
      sellerInfo () {
        const result = []
        if (this.seller.infos) {
          this.seller.infos.map(item => result.push({description: item}))
        }
        return result
      }
    },
    mounted () {
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  @import "~styles/varibale";

  .seller {
    .title {
      padding-bottom: .24rem;
    }
    .seller-top {
      padding: .36rem;
      .collect {
        position: relative;padding-bottom: .36rem;
        border-bottom: 1px solid @border-color;
      }
      .name {
        font-size: 14px;
        color: rgb(7, 17, 27);
      }
      .rating-star {
        display: flex;align-items: center;
        font-size: 10px;margin-top: .16rem;color: rgb(77, 85, 93);
      }
      .number {
        margin-left: .16rem;
      }
      .month-sale {
        margin-left: .24rem;
      }
      .collect-icon {
        text-align: center;
        position: absolute;right: 0;top: 0;
        color: rgb(77, 85, 93);
        width: 3em;
      }
      .love {
        &.active {color: rgb(240, 20, 20);}
        font-size: 24px;
        margin-bottom: 0.08rem;
      }
    }
    .deliver {
      padding-top: .36rem;
      .deliver-price {
        display: flex;
        li {
          flex: 1;display: flex;flex-direction: column;
          align-items: center;
          justify-content: center;
          &:not(:last-child) {
            border-right: 1px solid @border-color;
          }
          p:first-child {
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
          p:last-child {
            margin-top: .08rem;
            font-size: 10px;
            color: rgb(7, 17, 27);
            span {font-size: 24px;}
          }
        }
      }
    }
    .activity {
      padding: .36rem;
      .content {
        padding: 0 .24rem .36rem;
        font-size: 12px;
        line-height: .4rem;
        color: rgb(240, 20, 20);
      }
    }
    .scene {
      padding: .36rem;
    }
    .info {
      padding: .36rem;
    }
  }
</style>
