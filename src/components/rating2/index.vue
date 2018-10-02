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
            result.push('on')
          } else if ((i = onStar) && hasDecimal) {
            result.push('half')
          } else {
            result.push('off')
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
    span {display: inline-block;
      &:last-child {margin-right: 0;}
    }
  }

  .star-48 {
    .star-item {
      width: 20px;height: 20px;margin-right: 22px;background-size: 20px 20px;
      &.on {background-image: url('~@/assets/img/star48_on@2x.png');}
      &.half {background-image: url('~@/assets/img/star48_half@2x.png');}
      &.off {background-image: url('~@/assets/img/star48_off@2x.png');}
    }
  }

  .star-36 {
    .star-item {
      width: 15px;height: 15px;margin-right: 3px;background-size: 15px 15px;
      &.on {background-image: url('~@/assets/img/star36_on@2x.png');}
      &.half {background-image: url('~@/assets/img/star36_half@2x.png');}
      &.off {background-image: url('~@/assets/img/star36_off@2x.png');}
    }
  }

  .star-24 {
    .star-item {
      width: 10px;height: 10px;margin-right: 3px;background-size: 10px 10px;
      &:last-child {margin-right: 0;}
      &.on {background-image: url('~@/assets/img/star24_on@2x.png');}
      &.half {background-image: url('~@/assets/img/star24_half@2x.png');}
      &.off {background-image: url('~@/assets/img/star24_off@2x.png');}
    }
  }
</style>
