<template>
  <div class="index">
    <router-view/>
    <dis-connected></dis-connected>
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
