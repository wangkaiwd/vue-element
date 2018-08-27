<template>
  <div class="home">
    <el-header></el-header>
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
    mounted () {
      this.getGoodsData()
    },
    methods: {
      getGoodsData () {
        this.$api.element.fetchGoods({}, res => {

        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .home {

  }
</style>
