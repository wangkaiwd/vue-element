<template>
  <div class="rating">
    <img v-for="(item,i) in fullStar"
         :src="stars[0]"
         :key="i"
         :style="starStyle">
    <img :style="starStyle"
         v-if="visibleHalfStar"
         :src="stars[1]">
    <img v-for="(item,i) in emptyStar"
         :src="stars[2]"
         :key="i"
         :style="starStyle">
  </div>
</template>

<script>
  import starOn from '@/assets/img/star24_on@2x.png'
  import starHalf from '@/assets/img/star24_half@2x.png'
  import starOff from '@/assets/img/star24_off@2x.png'

  const LENGTH = 5

  export default {
    name: 'Rating',
    props: {
      score: {
        type: Number,
        required: true
      },
      starStyle: {
        type: Object,
        default () {
          return {marginRight: '0.4rem'}
        }
      }
    },
    data () {
      return {
        stars: [starOn, starHalf, starOff]
      }
    },
    computed: {
      fullStar () {
        return parseInt(this.score)
      },
      visibleHalfStar () {
        const {score} = this
        return score > parseInt(score)
      },
      emptyStar () {
        const len = (this.visibleHalfStar ? this.fullStar + 1 : this.fullStar)
        return LENGTH - len
      }
    },
  }
</script>

<style lang="less" scoped>
  .rating {display: inline-flex;
    img:not(last-child) {margin-right: 0;}
  }
</style>
