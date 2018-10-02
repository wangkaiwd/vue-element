<template>
  <div class="home">
    <el-header :sellerData="sellerData"></el-header>
    <el-tabs></el-tabs>
    <div class="tab-content">
      <router-view></router-view>
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
        this.$api.element.fetchSeller({}, res => {
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
    .tab-content {flex: 1;}
  }
</style>
