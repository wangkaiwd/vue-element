<template>
  <div class="goods">
    <goods-aside></goods-aside>
    <goods-list></goods-list>
  </div>
</template>

<script>
  import GoodsAside from './components/aside'
  import GoodsList from './components/list'

  export default {
    name: 'goods',
    components: {GoodsAside, GoodsList}
  }
</script>

<style lang="less" scoped>
  .goods {
    position: relative;
    display: flex;
    height: 100%;
  }
</style>
