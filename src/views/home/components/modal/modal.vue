<template>
  <div class="modal-wrapper"
       @click="$emit('update:modalVisible', false)">
    <div class="modal">
      <div class="modal-content">
        <div class="content-top">
          <div class="title">
            <h3>{{sellerData.name}}</h3>
          </div>
          <div class="rating-wrapper">
            <rating :score="sellerData.foodScore"></rating>
          </div>
        </div>
        <div class="content-middle">
          <div class="favourable">
            <div class="content-title">
              <div class="title-left">
                <p class="line"></p>
              </div>
              <div class="title-text">优惠信息</div>
              <div class="title-right">
                <p class="line"></p>
              </div>
            </div>
            <div class="content-list">
              <ul>
                <li class="list-item"
                    v-for="(item,index) in sellerData.supports"
                    :key="index">
                  <img :src="supportsImgArray[item.type]" alt="">
                  <p>{{item.description}}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="notice">
            <div class="content-title">
              <div class="title-left">
                <p class="line"></p>
              </div>
              <div class="title-text">商家公告</div>
              <div class="title-right">
                <p class="line"></p>
              </div>
            </div>
            <div class="content-list">
              <p class="introduce"> {{sellerData.bulletin}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="content-bottom">
        <p class="close">
          <base-icon @click="$emit('update:modalVisible', false)"
                     class="close-icon"
                     icon="close">
          </base-icon>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  // fixme: 当modal中的内容超出屏屏幕可以进行滑动时，在ios系统上会显示modal下边的区域
  import Rating from '@/components/rating2'

  export default {
    name: 'modal',
    props: {
      sellerData: {
        type: Object,
        required: true
      },
      supportsImgArray: {
        type: Array,
        required: true
      }
    },
    data () {
      return {}
    },
    components: {Rating},
    methods: {}
  }
</script>

<style lang="less" scoped>
  .modal-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 1;
    /*为一个元素后面区域添加图形效果，实现功能，只有在IOS上可以正常使用*/
    backdrop-filter: blur(10px);
    .modal {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: rgba(7, 17, 27, 0.8);
      /*overflow: visible;(默认值，内容不会被修剪，会呈现在元素框之外)*/
      overflow: scroll;
      .modal-content {
        flex: 1;
        padding: 1.28rem 0.72rem 0;
      }
      .close {
        text-align: center;
      }
      .title {
        h3 {
          text-align: center;
          font-weight: 700;
          font-size: 16px;
        }
      }
      .rating-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.56rem;
        margin-top: 0.32rem;
      }
      .close-icon {
        color: rgba(255, 255, 255, 0.5);
        font-size: 32px;
      }
      .content-title {
        display: flex;
        .title-left,
        .title-right {
          width: 2.24rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .title-text {
          flex: 1;
          text-align: center;
          font-weight: 700;
        }
        .line {
          width: 100%;
          height: 2px;
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
      .content-list {
        font-weight: 200;
        padding: 0.48rem 0.24rem 0.56rem;
        .introduce {
          line-height: 0.48rem;
        }
      }
      .list-item {
        display: flex;
        font-size: 12px;
        align-items: center;
        &:not(:first-child) {
          margin-top: 0.24rem;
        }
        img {
          width: 0.32rem;
          height: 0.32rem;
          margin-right: 0.12rem;
        }
      }
      .content-bottom {
        margin-bottom: .64rem;
      }
    }
  }
</style>
