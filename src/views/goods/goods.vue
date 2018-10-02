<template>
  <div class="goods">
    <goods-aside :goodsData="goodsData"></goods-aside>
    <goods-list></goods-list>
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
    position: relative;
    display: flex;
    height: 100%;
  }
</style>
