<template>
  <div class="modal">
    <div class="modal-content">
      <div class="content-top">
        <div class="title">
          <h3>粥品香坊（大运村）</h3>
        </div>
        <div class="rating">

        </div>
      </div>
      <div class="content-middle">
        <div class="favourable">
          <div class="content-title">
            <div class="title-left"></div>
            <div class="title-text">优惠信息</div>
            <div class="title-right"></div>
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
    background-color: rgba(7, 17, 27, .8);
    .modal-content {
      height: 100%;
      padding: 1.28rem .72rem .64rem;
    }
    .close {
      text-align: center;
    }
    .close-icon {
      color: rgba(255, 255, 255, .5);
      font-size: 32px;
    }
    .content-title {
      display: flex;
      .title-left,
      .title-right {
        width: .224rem;
        color: rgba(255, 255, 255, .2);
      }
      .title-text {
        flex: 1;
        text-align: center;
      }
    }
  }
</style>
