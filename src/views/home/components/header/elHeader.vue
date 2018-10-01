<template>
  <div class="header">
    <div class="header-content">
      <div class="content-left">
        <img class="avatar" :src="sellerData.avatar" alt="">
      </div>
      <div class="content-right">
        <h3 class="title"><img :src="BrandPic" alt="">{{sellerData.name}}</h3>
        <p class="deliver">{{sellerData.description}}/{{sellerData.deliveryTime}}分钟送达</p>
        <p class="full-cut" v-if="sellerData.supports">
          <span>
            <img :src="supportsImg" alt="">
          </span>
          {{sellerData.supports[0].description}}
        </p>
      </div>
      <div class="supports-number" v-if="sellerData.supports" @click="modalVisible=true">
        <span>{{sellerData.supports.length}}个</span>
        <base-icon class="icon-right" icon="right"></base-icon>
      </div>
    </div>
    <div class="header-bottom">
      <span class="bulletin"><img :src="BulletinPic" alt=""></span>
      <span class="bulletin-text">{{sellerData.bulletin}}</span>
      <base-icon class="icon-right" icon="right" @click="modalVisible=true"></base-icon>
    </div>
    <div class="background">
      <img :src="sellerData.avatar" alt="">
    </div>
    <transition name="scale">
      <el-modal :sellerData="sellerData"
                :supportsImgArray="supportsImgArray"
                v-if="modalVisible"
                :modalVisible.sync="modalVisible">
      </el-modal>
    </transition>
  </div>
</template>

<script>
  import BulletinPic from '@/assets/img/bulletin@2x.png'
  import BrandPic from '@/assets/img/brand@2x.png'
  import SupportsPic1 from '@/assets/img/decrease_1@2x.png'
  import SupportsPic2 from '@/assets/img/discount_2@2x.png'
  import SupportsPic3 from '@/assets/img/special_2@2x.png'
  import SupportsPic4 from '@/assets/img/invoice_2@2x.png'
  import SupportsPic5 from '@/assets/img/guarantee_2@2x.png'
  import ElModal from '../modal/modal'

  export default {
    name: 'elHeader',
    components: {ElModal},
    props: {
      sellerData: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        BrandPic,
        BulletinPic,
        SupportsPic1,
        SupportsPic2,
        SupportsPic3,
        SupportsPic4,
        SupportsPic5,
        modalVisible: false
      }
    },
    computed: {
      // 用索引和图片进行对应
      supportsImg () {
        const imgArr = [
          this.SupportsPic1,
          this.SupportsPic2,
          this.SupportsPic3,
          this.SupportsPic4,
          this.SupportsPic5
        ]
        return imgArr[this.sellerData.supports[0].type]
      },
      supportsImgArray () {
        return [
          this.SupportsPic1,
          this.SupportsPic2,
          this.SupportsPic3,
          this.SupportsPic4,
          this.SupportsPic5
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '~styles/mixins.less';

  @header-bg-color: rgba(7, 17, 27, 0.5);
  .header {
    position: relative;
    padding-top: 1px;
    height: 2.68rem;
    background-color: @header-bg-color;
    color: #fff;
    .scale-enter-active {
      animation: scale .5s;
    }
    .scale-leave-active {
      animation: scale .5s reverse;
    }
    @keyframes scale {
      0% {transform: scale(0);}
      50% {transform: scale(1.2);}
      100% {transform: scale(1)}
    }
    .header-content {
      position: relative;
      margin-top: 0.48rem;
      margin-left: 0.48rem;
      display: flex;
    }
    .content-left {
      width: 1.28rem;
      height: 1.28rem;
    }
    .content-right {
      margin-left: 0.32rem;
    }
    .title {
      margin-top: 0.04rem;
      font-size: 16px;
      img {
        width: 0.6rem;
        height: 0.36rem;
        margin-right: 0.12rem;
      }
    }
    .deliver {
      font-size: 14px;
      margin-top: 0.16rem;
    }
    .full-cut {
      display: flex;
      font-size: 12px;
      margin-top: 0.2rem;
      > span {
        display: inline-block;
        width: 0.24rem;
        height: 0.24rem;
        margin-right: 0.08rem;
      }
    }
    .supports-number {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 0.24rem;
      bottom: -0.12rem;
      background-color: rgba(0, 0, 0, 0.2);
      font-size: 12px;
      width: 0.8rem;
      height: 0.48rem;
      border-radius: 0.16rem;
    }

    .header-bottom {
      padding: 0 0.24rem;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      min-width: 0;
      height: 0.56rem;
      background-color: rgba(7, 17, 27, 0.2);
      display: flex;
      align-items: center;
    }
    .bulletin {
      display: inline-block;
      height: 0.3rem;
      width: 0.5rem;
      margin-right: 0.08rem;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    .bulletin-text {
      .ell();
      font-size: 12px;
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
