<template>
  <div class="header" v-if="Object.keys(sellerData).length">
    <div class="header-content">
      <div class="content-left">
        <img class="avatar" :src="sellerData.avatar" alt="">
      </div>
      <div class="content-right">
        <h3 class="title">{{sellerData.name}}</h3>
        <p class="deliver">{{sellerData.description}}/{{}}</p>
        <p class="full-cut" v-if="sellerData.supports">
          <span>
            <img :src="SupportsPic" alt="">
          </span>
          {{sellerData.supports[0].description}}
        </p>
      </div>
      <div class="supports-number" v-if="sellerData.supports">
        <span>{{sellerData.supports.length}}个</span>
        <base-icon class="icon-right" icon="right"></base-icon>
      </div>
    </div>
    <div class="header-bottom">
      <span class="bulletin"><img :src="BulletinPic" alt=""></span>
      <span class="bulletin-text">{{sellerData.bulletin}}</span>
      <base-icon class="icon-right" icon="right"></base-icon>
    </div>
    <div class="background">
      <img :src="sellerData.avatar" alt="">
    </div>
  </div>
</template>

<script>
  import BulletinPic from '@/assets/img/bulletin@2x.png'
  import SupportsPic from '@/assets/img/decrease_1@2x.png'

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
        SupportsPic
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '~styles/mixins.less';

  @header-bg-color: rgba(7, 17, 27, .5);
  .header {
    position: relative;
    padding-top: 1px;
    height: 2.68rem;
    background-color: @header-bg-color;
    color: #fff;
    .header-content {
      position: relative;
      margin-top: .48rem;
      margin-left: .48rem;
      display: flex;
    }
    .content-left {
      width: 1.28rem;
      height: 1.28rem;
    }
    .content-right {
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
      display: flex;
      font-size: 12px;
      margin-top: .2rem;
      > span {
        display: inline-block;
        width: .24rem;
        height: .24rem;
        margin-right: .08rem;
      }
    }
    .supports-number {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: .24rem;
      bottom: -.12rem;
      background-color: rgba(0, 0, 0, .2);
      font-size: 12px;
      width: .8rem;
      height: .48rem;
      border-radius: .16rem;
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
    .icon-right {
      font-size: 12px;
    }
    .background {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      > img {
        width: 100%;
        height: 100%;
      }
      filter: blur(10px);
      z-index: -1;
    }
  }
</style>
