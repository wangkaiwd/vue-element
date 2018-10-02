<template>
  <div class="goods">
    <div class="goods-wrapper">
      <goods-aside :goodsData="goodsData"></goods-aside>
      <goods-list :goodsData="goodsData"></goods-list>
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
        goodsData: []
      }
    },
    components: {GoodsAside, GoodsList},
    mounted () {
      this.$api.element.fetchGoods({}, res => {
        this.goodsData = res.goods
      })
    }
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
