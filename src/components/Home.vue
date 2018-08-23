<template>
  <div class="home">
    <!--<van-button type="default">默认按钮</van-button>-->
    <!--<van-button type="primary">主要按钮</van-button>-->
    <!--<van-button type="warning">警告按钮</van-button>-->
    <!--<van-button type="danger">危险按钮</van-button>-->
    <overtime v-if="offline"></overtime>
  </div>
</template>

<script>
  import Overtime from './overtime';

  export default {
    name: 'Home',
    components: {
      Overtime
    },
    data () {
      return {
        // offline: localStorage.getItem('webStatus') === 'true'
      };
    },
    computed: {
      offline () {
        return this.$store.state.offline;
      }
    },
    mounted () {

      this.$Api.lianlian.fetchLianlianAccount({}, res => {
        console.log('res', res);
      });
    }
  };
</script>

<style lang="less" scoped>
  .home {
  }
</style>
