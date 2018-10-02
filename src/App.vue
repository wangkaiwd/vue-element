<template>
  <div class="index" v-cloak>
    <dis-connected v-if="offline"></dis-connected>
    <router-view/>
  </div>
</template>

<script>
  import DisConnected from '@/components/disConnected'
  import { mapState } from 'vuex'

  export default {
    name: 'App',
    computed: {
      ...mapState(['offline'])
    },
    components: {
      DisConnected,
    },
  }
</script>

<style lang="less" scoped>
  .index {
    -webkit-overflow-scrolling: touch;
  }

  [v-cloak] {display: none;}
</style>
