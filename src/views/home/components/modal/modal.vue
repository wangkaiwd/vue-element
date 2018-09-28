<template>
  <div class="modal">
    <div class="modal-content">
      <div class="content-top">
        <div class="title">
          <h3>{{sellerData.name}}</h3>
        </div>
        <div class="rating">
          评分
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
        <div class="notice"></div>
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
  methods: {}
}
</script>

<style lang="less" scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(7, 17, 27, 0.8);
  .modal-content {
    height: 100%;
    padding: 1.28rem 0.72rem 0.64rem;
  }
  .close {
    text-align: center;
  }
  .title {
    font-size: 16px;
  }
  .rating {
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
    }
    .line {
      width: 100%;
      height: 2px;
      background-color: rgba(255, 255, 255, 0.2);
    }
    .content-list {
      padding: 0.48rem 0.24rem 0.56rem;
    }
  }
}
</style>
