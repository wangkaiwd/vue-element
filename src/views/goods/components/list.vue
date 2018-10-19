<template>
  <div class="goods-list">
    <div class="goods-list-item-wrapper">
      <div class="goods-list-item"
           ref="listItem"
           v-for="(item,index) in goodsData"
           :key="index">
        <div class="list-title" ref="listTitle">{{item.name}}</div>
        <div class="list-content"
             v-for="(food, i) in item.foods"
             :key="i">
          <!--{{food}}-->
          <div class="content-left">
            <img :src="food.icon" @click="showDetail(food,i,index)">
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
                  <span v-if="food.oldPrice" class="price-old">￥{{food.oldPrice}}</span>
                </div>
                <cart-control :food="food"
                              :position="position"
                              @updateFood="updateFood($event,i,index)">
                </cart-control>
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
  import CartControl from '@/components/cartControl'

  export default {
    name: 'GoodsList',
    props: {
      goodsData: {
        type: Array,
        required: true
      },
      position: {
        type: Object,
        required: false
      }
    },
    components: {CartControl},
    data () {
      return {
        firstLevelIndex: 0,
        secondLevelIndex: 0
      }
    },
    mounted () {
      this.init()
    },
    computed: {
      ...mapState(['selectSide']),
    },
    methods: {
      ...mapMutations(['updateSelectSide']),
      init () {
        this.$nextTick(() => {
          this.scroll = new BScroll('.goods-list', {probeType: 3, click: true})
          this.oTitle = this.$refs.listTitle
          this.calcHeight()
          this.scroll.on('scroll', this.onScroll)
        })
      },
      onScroll ({y}) {
        // 当-y = height的时候，会进入下一个商品，此时左侧激活的列表应该是下一个
        let i = this.heights.findIndex(height => -y < height)
        this.updateSelectSide(i)
      },
      calcHeight () {
        const array = []
        const oContent = this.$refs.listItem
        let sum = 0
        for (let i = 0; i < oContent.length; i++) {
          sum += oContent[i].offsetHeight
          array.push(sum)
        }
        this.heights = array
      },
      scrollTop (i) {
        const {oTitle, scroll} = this
        scroll.scrollToElement(oTitle[i], 200)
      },
      updateFood (data, i, index) {
        this.$emit('updateFood', data, i, index)
      },
      showDetail (item, i, index) {
        this.firstLevelIndex = index
        this.secondLevelIndex = i
        this.$emit('updateDetail', item, true, this)
      },
    }
  }
</script>

<style lang="less" scoped>
  @import '~styles/varibale';
  @import '~styles/mixins';

  .goods-list {
    flex: 1;
    /*overflow: hidden;*/
    .list-title {
      padding-left: .28rem;
      border-left: 2px solid @border-color;
      font-size: 12px;
      color: rgb(147, 153, 159);
      height: .52rem;
      line-height: .52rem;
      background-color: #f3f5f7;
    }
    .list-content {
      display: flex;
      padding: .34rem 0;
      margin: 0 .34rem;
      .border-1px(@border-color);
    }
    .content-left {
      width: 1.16rem;
      height: 1.16rem;
    }
    .content-right {
      margin-left: .2rem;
      font-size: 10px;
      flex: 1;
      min-width: 0;
      color: rgb(147, 153, 159);
      li:not(:first-child) {
        margin-top: .16rem;
      }
    }
    .content-right-title {
      font-size: 14px;
      color: rgb(7, 17, 27);
    }
    /*防止文字换行之后没有行高，样式变丑*/
    .detail {line-height: 1.2;}
    .price-discount {
      font-size: 14px;
      margin-right: .16rem;
      color: #f01414;
    }
    .currency {color: #f01414;}
    .sale {
      display: flex;
      span {margin-right: .24rem;}
    }
    .money {
      display: flex;
      justify-content: space-between;
    }
    .price-old {text-decoration: line-through;}
  }
</style>
