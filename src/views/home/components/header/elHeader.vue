<template>
  <div class="header">
    <div class="header-content">
      <div class="content-left">
        <img class="avatar" :src="sellerData.avatar" alt="">
      </div>
      <div class="content-right">
        <h3 class="title"><img class="brand" :src="BrandPic" alt="">粥品香坊（大运村）</h3>
        <p class="deliver">蜂鸟专送/88分钟送达</p>
        <p class="full-cut">在线支付满28减5，满50减10</p>
      </div>
    </div>
    <div class="header-bottom">
      <span class="bulletin"><img :src="BulletinPic" alt=""></span>
      <span class="bulletin-text">粥品香坊其烹饪原料粥品香坊其烹饪原料粥品香</span>
      <base-icon class="bulletin-icon" icon="right"></base-icon>
    </div>
  </div>
</template>

<script>
  import BulletinPic from '@/assets/img/bulletin@2x.png'
  import BrandPic from '@/assets/img/brand@2x.png'

  export default {
    name: 'elHeader',
    props: {
      sellerData: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        BulletinPic,
        BrandPic
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '~styles/mixins.less';

  @header-bg-color: rgba(0, 0, 0, .2);
  .header {
    position: relative;
    padding-top: 1px;
    height: 2.68rem;
    background-color: @header-bg-color;
    .header-content {
      margin-top: .48rem;
      margin-left: .48rem;
      display: flex;
    }
    .content-left {
      width: 1.28rem;
      height: 1.28rem;
    }
    .content-right {
      color: #fff;
      margin-left: .32rem;
    }
    .title {
      font-size: 16px;
    }
    .deliver {
      font-size: 14px;
      margin-top: .16rem;
    }
    .full-cut {
      font-size: 12px;
      margin-top: .2rem;
    }
    .header-bottom {
      padding: 0 .24rem;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      min-width: 0;
      height: .56rem;
      background-color: rgba(7, 17, 27, .2);
      color: rgb(255, 255, 255);
      display: flex;
      align-items: center;
    }
    .bulletin {
      display: inline-block;
      height: .30rem;
      width: .50rem;
      margin-right: .08rem;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    .bulletin-text {
      .ell();
      flex: 1;
      min-width: 0;
    }
    .bulletin-icon {
      margin-left: auto;
      font-size: 16px;
    }
    .brand {
      height: .32rem;
    }
  }
</style>
