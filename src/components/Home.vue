<template>
  <div class="home">
    <overtime v-if="offline"></overtime>
  </div>
</template>

<script>
  import Overtime from './overtime'

  export default {
    name: 'Home',
    components: {
      Overtime
    },
    data () {
      return {
        // offline: localStorage.getItem('webStatus') === 'true'
      }
    },
    computed: {
      offline () {
        return this.$store.state.offline
      }
    },
    mounted () {

      this.$Api.lianlian.fetchLianlianAccount({}, res => {
        console.log('res', res)
      })
    }
  }
</script>

<style lang="less" scoped>
  .home {
  }
</style>
