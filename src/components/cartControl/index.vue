<template>
  <div class="cart-control">
    <!--这里一定要使用v-if,v-show不支持template元素，也不支持v-else-->
    <transition name="move">
      <div class="left-wrapper" v-if="visible">
        <div class="left-button" @click="reduce">
          <base-icon icon="reduce"></base-icon>
        </div>
        <div class="number">{{food.count}}</div>
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
    props: {
      expand: {
        type: Boolean,
        default: false
      },
      food: {
        type: Object,
        default () {
          return {
            count: 0
          }
        }
      }
    },
    data () {
      return {
        visible: this.expand,
        copyFood: {}
      }
    },
    mounted () {
    },
    methods: {
      reduce () {
        this.copyFood = JSON.parse(JSON.stringify(this.food))
        this.copyFood.count--
        if (this.copyFood.count <= 0) {
          this.visible = false
        }
        this.$emit('updateFood', this.copyFood)
      },
      plus () {
        this.copyFood = JSON.parse(JSON.stringify(this.food))
        if (!this.copyFood.count) {
          this.copyFood.count = 0
        }
        this.copyFood.count++
        this.visible = true
        this.$emit('updateFood', this.copyFood)
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
      transition: all .6s;
    }
    .number {
      width: .48rem;
      text-align: center;
      font-size: 12px;
      color: #93999f;
    }
    /*在开始的第一帧和结束的最后一帧进行过渡动画*/
    .move-enter,
    .move-leave-to {
      transform: translateX(100%);
      opacity: 0;
      .left-button {transform: rotate(360deg);}
    }
    /*加了类之后的动画要在上面2个类中添加，因为active类会在消失和出现的过程中一直都存在
      这个类消失说明消失和出现的过程已经结束了
    */
    .move-enter-active,
    .move-leave-active {
      transition: all .6s;
    }
  }

</style>
