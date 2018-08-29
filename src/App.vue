<template>
  <div class="index">
    <dis-connected v-if="network"></dis-connected>
    <router-view/>
  </div>
</template>

<script>
  import DisConnected from '@/components/disConnected'

  export default {
    name: 'App',
    computed: {
      network () {
        return this.$store.state.offline
      }
    },
    components: {
      DisConnected,
    },
  }
</script>

<style lang="less" scoped>

</style>
