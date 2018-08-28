<template>
  <div class="home">
    <el-header :sellerData="sellerData"></el-header>
    <el-tabs></el-tabs>
    <router-view></router-view>
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

  }
</style>
