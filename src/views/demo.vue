<template>
  <div class="demo">
    <div class="content-wrapper">
      <button>click</button>
      <div class="content">
        <button>点我</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Demo',
    mounted () {
      this.$api.element.fetchDemo({}, res => console.log(res))
    }
  }
</script>

<style>
</style>
