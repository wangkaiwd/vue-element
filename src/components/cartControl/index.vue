<template>
  <div class="cart-control">
    <!--这里一定要使用v-if,v-show不支持template元素，也不支持v-else-->
    <transition name="move">
      <div class="left-wrapper" v-if="visible">
        <div class="left-button" @click="reduce">
          <base-icon icon="reduce"></base-icon>
        </div>
        <div class="number">10</div>
      </div>
    </transition>
    <div class="right-button" @click="plus">
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
    },
    methods: {
      reduce () {
      },
      plus () {
        console.log('visible', this.visible)
        this.visible = !this.visible
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '~styles/varibale';

  .cart-control {
    display: flex;
    align-items: center;
    overflow: hidden;
    .left-wrapper {display: flex;align-items: center;}
    .right-button,
    .left-button {
      font-size: 24px;
      border-radius: 50%;
      color: @blue;
    }
    .number {width: .48rem;text-align: center;}
    .move-enter,
    .move-leave-to {
      transform: translateX(100%);
      opacity: 0;
    }
    .move-enter-active,
    .move-leave-active {
      transition: all 1s;
    }
  }

</style>
