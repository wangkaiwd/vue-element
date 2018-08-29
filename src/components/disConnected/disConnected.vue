<template>
  <div class="dis-connected">
    断网了，请刷新页面重试！！
    <van-button type="warning" @click="$router.go(0)">刷新</van-button>
  </div>
</template>

<script>
  export default {
    name: 'DisConnected'
  }
</script>

<style lang="less" scoped>
  .dis-connected {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: pink;
  }
</style>
