<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li class="item"
          v-for="(item,i) in goodsData"
          :key="i">
        <p>
          <img v-if="imgArray[item.type]"
               :src="imgArray[item.type]">
          <span>{{item.name}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import SupportsPic1 from '@/assets/img/decrease_3@2x.png'
  import SupportsPic2 from '@/assets/img/discount_3@2x.png'
  import SupportsPic3 from '@/assets/img/special_3@2x.png'
  import SupportsPic4 from '@/assets/img/invoice_3@2x.png'
  import SupportsPic5 from '@/assets/img/guarantee_3@2x.png'

  export default {
    name: 'GoodsAside',
    props: {
      goodsData: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        imgArray: [SupportsPic1, SupportsPic2, SupportsPic3, SupportsPic4, SupportsPic5]
      }
    },
    mounted () {
      this.$nextTick(() => this.scroll = new BScroll('.wrapper'))
    }
  }
</script>

<style lang="less" scoped>
  @import "~styles/mixins";
  @import "~styles/varibale";

  .wrapper {
    width: 1.6rem;
    background-color: #f3f5f7;
    padding: 0 .24rem;
    overflow: hidden;
    .content {min-height: 100%;}
    .item {
      display: flex;
      align-items: center;
      .border-1px(@border-color);
      height: 1.08rem;
      font-size: 12px;
      font-weight: @font-weight-text;
      p {line-height: .28rem;}
      img {width: .24rem;vertical-align: middle;}
    }
  }
</style>
