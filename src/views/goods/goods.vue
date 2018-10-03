<template>
  <div class="goods">
    <div class="goods-wrapper">
      <!--这里其实没有必要将这俩部分进行组件拆分，拆分之后会增加组件的复杂程度
        不过在这里可以练习组件传参
      -->
      <goods-aside @scrollToEl="$refs.goodsList.scrollTop($event)"
                   :goodsData="goodsData">
      </goods-aside>
      <goods-list ref="goodsList"
                  v-if="goodsData.length"
                  :goodsData="goodsData">
      </goods-list>
    </div>
    <div class="goods-cart">
    </div>
  </div>
</template>

<script>
  import GoodsAside from './components/aside'
  import GoodsList from './components/list'

  export default {
    name: 'goods',
    data () {
      return {
        goodsData: [],
      }
    },
    components: {GoodsAside, GoodsList},
    mounted () {
      this.$api.element.fetchGoods({}, res => {
        this.goodsData = res.goods
      })
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  .goods {
    display: flex;
    height: 100%;
    flex-direction: column;
    .goods-wrapper {
      display: flex;
      flex: 1;
    }
    .goods-cart {
      height: .96rem;
      width: 100%;
      background-color: #141d27;
    }
  }
</style>
