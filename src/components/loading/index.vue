<template>
  <div class="skeleton page">
    <div class=skeleton-nav></div>
    <div class=skeleton-swiper></div>
    <ul class=skeleton-tabs>
      <li class=skeleton-tabs-item>
        <span></span>
      </li>
      <li class=skeleton-tabs-item>
        <span></span>
      </li>
      <li class=skeleton-tabs-item>
        <span></span>
      </li>
      <li class=skeleton-tabs-item>
        <span></span>
      </li>
      <li class=skeleton-tabs-item>
        <span></span>
      </li>
      <li class=skeleton-tabs-item>
        <span></span>
      </li>
      <li class=skeleton-tabs-item>
        <span></span>
      </li>
      <li class=skeleton-tabs-item>
        <span></span>
      </li>
    </ul>
    <div class=skeleton-banner></div>
    <div class=skeleton-productions></div>
    <div class=skeleton-productions></div>
    <div class=skeleton-productions></div>
    <div class=skeleton-productions></div>
    <div class=skeleton-productions></div>
  </div>
</template>

<script>
  export default {
    name: 'BaseLoading'
  }
</script>

<style lang="less" scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .skeleton {
    position: relative;
    height: 100%;
    overflow: hidden;
    padding: 4vw;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #fff;
  }

  .skeleton-nav {
    height: 12vw;
    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
    background-size: 400% 100%;
    margin-bottom: 4vw;
    animation: ant-skeleton-loading .8s ease infinite;
  }

  .skeleton-swiper {
    height: 42.667vw;
    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
    background-size: 400% 100%;
    margin-bottom: 4vw;
    animation: ant-skeleton-loading .8s ease infinite;
  }

  .skeleton-tabs {
    list-style: none;
    padding: 0;
    margin: 0 -4vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .skeleton-tabs-item {
    width: 25%;
    height: 14.667vw;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    margin-bottom: 4vw;
  }

  .skeleton-tabs-item span {
    display: inline-block;
    width: 14.667vw;
    height: 14.667vw;
    border-radius: 14.667vw;
    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
    background-size: 400% 100%;
    animation: ant-skeleton-loading .8s ease infinite;
  }

  .skeleton-banner {
    height: 16vw;
    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
    background-size: 400% 100%;
    margin-bottom: 4vw;
    animation: ant-skeleton-loading .8s ease infinite;
  }

  .skeleton-productions {
    height: 5.333vw;
    margin-bottom: 4.8vw;
    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
    background-size: 400% 100%;
    animation: ant-skeleton-loading .8s ease infinite;
  }

  .skeleton-productions:last-child {
    margin-bottom: 0;
  }

  @keyframes ant-skeleton-loading {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
</style>
