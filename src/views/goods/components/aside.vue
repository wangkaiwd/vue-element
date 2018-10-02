<template>
  <div class="goods-aside">
    <ul class="goods-category">
      <li class="item">单人精彩套餐</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'GoodsAside'
  }
</script>

<style lang="less" scoped>
  @import "~styles/mixins";
  @import "~styles/varibale";

  .goods-aside {
    width: 1.6rem;
    background-color: #f3f5f7;
    padding: 0 .24rem;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      .border-1px(@border-color);
      height: 1.08rem;
      font-size: 12px;
      font-weight: @font-weight-text;
    }
  }
</style>
