<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li class="item"
          :class="{active: i === selectSide}"
          v-for="(item,i) in goodsData"
          @click="handleClick(i,$event)"
          :key="i">
        <p class="border-1px">
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
  import { mapMutations, mapState } from 'vuex'

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
        imgArray: [SupportsPic1, SupportsPic2, SupportsPic3, SupportsPic4, SupportsPic5],
      }
    },
    computed: {
      ...mapState(['selectSide'])
    },
    mounted () {
      this.$nextTick(() => this.scroll = new BScroll('.wrapper', {
        click: true
      }))
    },
    methods: {
      ...mapMutations(['updateSelectSide']),
      handleClick (i, e) {
        if (!e._constructed) {
          return
        }
        this.updateSelectSide(i)
        this.$emit('scrollToEl', i)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "~styles/mixins";
  @import "~styles/varibale";

  .wrapper {
    width: 1.6rem;
    background-color: #f3f5f7;
    overflow: hidden;
    .content {min-height: 100%;}
    .item {
      padding: 0 .24rem;
      font-size: 12px;
      font-weight: @font-weight-text;
      display: table;
      width: 100%;
      height: 1.08rem;
      p {
        display: table-cell;
        vertical-align: middle;
        line-height: .28rem;
        .border-1px(@border-color);
      }
      img {width: .24rem;vertical-align: middle;}
      &.active {
        /*遮住上方的border*/
        position: relative;
        z-index: 1;
        margin-top: -1px;
        font-weight: 700;
        background-color: #fff;
        p {.border-none;}
      }
    }
  }
</style>
