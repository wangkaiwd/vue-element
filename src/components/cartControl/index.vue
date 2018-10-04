<template>
  <div class="cart-control">
    <template v-show="visible">
      <div class="left-button">
        <base-icon icon="reduce"></base-icon>
      </div>
      <div class="number">10</div>
    </template>
    <div class="right-button" @click="!visible">
      <base-icon icon="plus"></base-icon>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CartControl',
    data () {
      return {
        visible: false
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '~styles/varibale';

  .cart-control {
    display: flex;
    align-items: center;
    .right-button,
    .left-button {
      font-size: 24px;
      border-radius: 50%;
      color: @blue;
    }
    .number {width: .48rem;text-align: center;}
  }

</style>
