<template>
  <div class="goods-list">
    <div class="goods-list-item-wrapper">
      <div class="goods-list-item"
           v-for="(item,i) in goodsData"
           :key="i">
        <div class="list-title">{{item.name}}</div>
        <div class="list-content"
             v-for="(food, i) in item.foods"
             :key="i">
          <div class="content-left">
            <img :src="food.icon">
          </div>
          <div class="content-right">
            <ul>
              <li class="content-right-title">{{food.name}}</li>
              <li class="detail">{{food.description}}</li>
              <li class="sale">
                <span>月售{{food.sellCount}}份</span>
                好评率{{food.rating}}%
              </li>
              <li class="money">
                <div class="price">
                  <span class="price-discount">
                    <span class="currency">￥</span>{{food.price}}
                  </span>
                  <span v-if="food.oldPrice" class="price-old"><del>￥{{food.oldPrice}}</del></span>
                </div>
                <div class="plus-button"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'GoodsList',
    props: {
      goodsData: {
        type: Array,
        required: true
      }
    },
    mounted () {
      this.$nextTick(() => this.scroll = new BScroll('.goods-list'))
    },
    computed: {
      ...mapState(['selectSide'])
    }
  }
</script>

<style lang="less" scoped>
  .goods-list {
    flex: 1;
    overflow: hidden;
    .list-title {
      &:before {
        display: inline-block;
        margin-right: .28rem;
        vertical-align: top;
        content: '';
        height: 100%;
        width: 2px;
        background-color: #d9dde1;
      }
      font-size: 12px;
      color: rgb(147, 153, 159);
      height: .52rem;
      line-height: .52rem;
      background-color: #f3f5f7;
    }
    .list-content {
      display: flex;
      padding: .34rem;
    }
    .content-left {
      width: 1.16rem;
      height: 1.16rem;
    }
    .content-right {
      margin-left: .2rem;
      font-size: 10px;
      color: rgb(147, 153, 159);
      li:not(:first-child) {
        margin-top: .16rem;
      }
    }
    .content-right-title {
      font-size: 14px;
      color: rgb(7, 17, 27);
    }
    .price-discount {
      font-size: 14px;
      margin-right: .16rem;
      color: #f01414;
    }
    .currency {
      color: #f01414;
    }
    .sale {
      display: flex;
      span {margin-right: .24rem;}
    }
  }
</style>
