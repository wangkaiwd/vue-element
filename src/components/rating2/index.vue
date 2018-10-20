<template>
  <div class="rating2" :class="`star-${size}`">
    <span class="star-item"
          v-for="(star,i) in stars"
          :key="i"
          :class="star">
    </span>
  </div>
</template>

<script>
  // 定义评分星星相关常量
  const LENGTH = 5
  const CLS_ON = 'on'
  const CLS_HALF = 'half'
  const CLS_OFF = 'off'
  export default {
    name: 'Rating2',
    props: {
      size: {
        type: Number,
        default: 48
      },
      score: {
        type: Number,
        default: LENGTH
      }
    },
    computed: {
      // 计算出星星类名组成的数组
      stars () {
        const result = []
        const onStar = parseInt(this.score)
        const hasDecimal = (onStar < this.score)
        for (let i = 0; i < LENGTH; i++) {
          if (i < onStar) {
            result.push(CLS_ON)
          } else if ((i = onStar) && hasDecimal) {
            result.push(CLS_HALF)
          } else {
            result.push(CLS_OFF)
          }
        }
        return result
      }
    }
  }
</script>

<style lang="less" scoped>
  .rating2 {
    display: inline-flex;font-size: 0;
    vertical-align: top;
    span {
      display: inline-block;
      /*vertical-align: top;*/
      &:last-child {margin-right: 0;}
    }
  }

  .star-48 {
    .star-item {
      width: .4rem;height: .4rem;margin-right: .44rem;background-size: .4rem .4rem;
      &.on {background-image: url('~@/assets/img/star48_on@2x.png');}
      &.half {background-image: url('~@/assets/img/star48_half@2x.png');}
      &.off {background-image: url('~@/assets/img/star48_off@2x.png');}
    }
  }

  .star-36 {
    .star-item {
      width: .3rem;height: .3rem;margin-right: .06rem;background-size: .3rem .3rem;
      &.on {background-image: url('~@/assets/img/star36_on@2x.png');}
      &.half {background-image: url('~@/assets/img/star36_half@2x.png');}
      &.off {background-image: url('~@/assets/img/star36_off@2x.png');}
    }
  }

  .star-24 {
    .star-item {
      width: .2rem;height: .2rem;margin-right: 0.06rem;background-size: .2rem .2rem;
      &:last-child {margin-right: 0;}
      &.on {background-image: url('~@/assets/img/star24_on@2x.png');}
      &.half {background-image: url('~@/assets/img/star24_half@2x.png');}
      &.off {background-image: url('~@/assets/img/star24_off@2x.png');}
    }
  }
</style>
