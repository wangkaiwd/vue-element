<template>
  <div class="tabs border-1px">
    <ul class="tabs-list">
      <router-link tag="li"
                   active-class="router-active"
                   v-for="item in tabConfig"
                   :to="item.to"
                   :key="item.id">
        {{item.name}}
      </router-link>
    </ul>
  </div>
</template>

<script>
  const tabConfig = [
    {id: 1, name: '商品', to: '/home/goods'},
    {id: 2, name: '评论', to: '/home/ratings'},
    {id: 3, name: '商家', to: '/home/seller'},
  ]
  export default {
    name: 'tabs',
    data () {
      return {
        tabConfig
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "~@/assets/styles/mixins.less";
  @import "~styles/varibale.less";

  .tabs {
    height: .8rem;
    background-color: #fff;
    .border-1px(@border-color);
    .tabs-list {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: rgb(77, 85, 93);
    }
    .router-active {color: rgb(240, 20, 20);}
  }
</style>
