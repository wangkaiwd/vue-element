<template>
  <div class="list-wrapper">
    <ul class="list">
      <li v-for="(list,i) in listData" :key="i">
        <img v-if="list.type !== void 0" :src="imgArr[list.type]" alt="">
        <span>{{list.description}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import SupportsPic1 from '@/assets/img/decrease_1@2x.png'
  import SupportsPic2 from '@/assets/img/discount_2@2x.png'
  import SupportsPic3 from '@/assets/img/special_2@2x.png'
  import SupportsPic4 from '@/assets/img/invoice_2@2x.png'
  import SupportsPic5 from '@/assets/img/guarantee_2@2x.png'

  export default {
    name: 'list',
    props: {
      listData: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        imgArr: [
          SupportsPic1,
          SupportsPic2,
          SupportsPic3,
          SupportsPic4,
          SupportsPic5
        ]
      }
    },
    computed: {}
  }
</script>

<style lang="less" scoped>
  @import "~styles/varibale";

  .list-wrapper {
    .list {
      li {
        display: flex;
        align-items: center;
        padding: .32rem .24rem;
        border-top: 1px solid @border-color;
        font-size: 12px;
        color: rgb(7, 17, 27);
        img {width: .32rem;height: .32rem;margin-right: .12rem;}
      }
    }
  }
</style>
