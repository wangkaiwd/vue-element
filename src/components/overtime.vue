<template>
  <div class="overtime">
    <!--<h4>网络出错了，点击刷新</h4>-->
    <!--<van-button class="button" @click="$router.go(0)" type="warning">刷新</van-button>-->
    <lottie :options="defaultOptions" :height="400" v-on:animCreated="handleAnimation"/>
    <div class="buttons">
      <van-button @click="stop" type="warning" plain>stop</van-button>
      <van-button @click="pause" type="warning" plain>pause</van-button>
      <van-button @click="play" type="warning" plain>play</van-button>
    </div>
  </div>
</template>

<script>
  import * as animationData from '@/assets/Lottie/pumped_up'
  import Lottie from 'vue-lottie'

  export default {
    name: 'overtime',
    data () {
      return {
        defaultOptions: {animationData: animationData},
        animationSpeed: 1,
        anim: {}
      }
    },
    components: {
      Lottie
    },
    methods: {
      handleAnimation (anim) {
        this.anim = anim
      },
      // 停止动画
      stop () {
        this.anim.stop()
      },
      // 开始动画
      play: function () {
        this.anim.play()
      },
      // 暂停动画
      pause: function () {
        this.anim.pause()
      },
      // 动画速度
      onSpeedChange () {
        this.anim.setSpeed(this.animationSpeed)
      }
    }
  }
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
    .buttons {
      display: flex;
      width: 100%;
      justify-content: space-around;
    }
  }
</style>
