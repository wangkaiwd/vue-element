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
      <transition @before-enter="beforeEnter"
                  @enter="enter"
                  @after-enter="afterEnter">
        <div class="ball-container" v-show="visibleBall">
          <div class="ball" ref="ball"></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CartControl',
    props: {
      food: {
        type: Object,
        default () {
          return {
            count: 0
          }
        }
      },
      position: {
        type: Object,
        required: false
      }
    },
    data () {
      return {
        copyFood: {},
        visibleBall: false,
        oBall: {}
      }
    },
    computed: {
      visible () {
        return this.food.count > 0
      }
    },
    mounted () {
      this.oBall = this.$refs.ball
    },
    methods: {
      reduce () {
        this.copyFood = JSON.parse(JSON.stringify(this.food))
        this.copyFood.count--
        this.$emit('updateFood', this.copyFood)
      },
      plus () {
        this.visibleBall = true
        this.copyFood = JSON.parse(JSON.stringify(this.food))
        if (!this.copyFood.count) {
          this.copyFood.count = 0
        }
        this.copyFood.count++
        this.$emit('updateFood', this.copyFood)
      },
      beforeEnter (el) {
        el.style.transform = `translate(0)`
      },
      enter (el) {
        const rect = el.getBoundingClientRect()
        const x = rect.x - this.position.x + rect.width / 2
        const y = this.position.y - rect.y - rect.height / 2
        el.style.transform = `translate(-${x}px)`
        this.oBall.style.transform = `translate(0,${y}px)`
      },
      afterEnter (el) {
        el.style.transform = `translate(0)`
        this.oBall.style.transform = `translate(0,0px)`
        el.style.display = 'none'
        this.visibleBall = false
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '~styles/varibale';

  .cart-control {
    display: flex;
    align-items: center;
    .left-wrapper {display: flex;align-items: center;}
    .right-button,
    .left-button {
      font-size: 24px;
      border-radius: 50%;
      color: @blue;
      transition: all .4s;
    }
    .right-button {position: relative;}
    .ball-container {
      position: absolute;
      z-index: 4;
      top: 0;
      right: 0;
      height: 100%;
      width: 100%;
      transition: all .4s linear;
    }
    .ball {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background-color: #00a0dc;
      transition: all .4s cubic-bezier(.2, -0.17, .41, -0.16);
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
      transition: all .4s;
    }
  }

</style>
