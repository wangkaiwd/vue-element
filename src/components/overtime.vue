<template>
  <div class="overtime">
    <h4>网络出错了，点击刷新</h4>
    <van-button class="button" @click="$router.go(0)" type="warning">刷新</van-button>
  </div>
</template>

<script>
  export default {
    name: 'overtime',
    data () {
      return {};
    }
  };
</script>

<style lang="less" scoped>
  .overtime {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: pink;
    display: flex;
    flex-wrap: wrap;
    .button {
      background-color: red;
    }
  }
</style>
