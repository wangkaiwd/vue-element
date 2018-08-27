<template>
  <div class="tabs">
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
  import RouterLink from 'vant/es/mixins/router-link'

  const tabConfig = [
    {id: 1, name: '商品', to: '/goods'},
    {id: 2, name: '评论', to: '/ratings'},
    {id: 3, name: '商家', to: '/seller'},
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
  .tabs {
    height: .8rem;
    background-color: skyblue;
    .tabs-list {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .router-active {
      color: rgb(240, 20, 20);
    }
  }
</style>
