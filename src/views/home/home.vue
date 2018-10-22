<template>
  <div class="home">
    <el-header class="el-header" :sellerData="sellerData"></el-header>
    <el-tabs></el-tabs>
    <div class="tab-content">
      <!--可以通过router-view将想要的数据传递到子组件-->
      <!--在确保sellerData不为空对象的时候加载路由组件-->
      <router-view v-if="Object.keys(sellerData).length" :seller="sellerData"></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/header/elHeader'
  import Tabs from './components/tabs/tabs'

  export default {
    name: 'home',
    components: {
      'el-header': Header,
      'el-tabs': Tabs
    },
    data () {
      return {
        sellerData: {}
      }
    },
    mounted () {
      this.getSellerData()
    },
    methods: {
      getSellerData () {
        this.$api.Element.fetchSeller({}, res => {
          this.sellerData = res.seller
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .home {
    display: flex;
    flex-direction: column;
    height: 100vh;
    .tab-content {flex: 1;overflow: scroll;position: relative;}
  }
</style>
