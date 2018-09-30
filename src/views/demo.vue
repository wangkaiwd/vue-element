<template>
  <div>
    demo
  </div>
</template>

<script>
export default {
  name: 'Demo',
  mounted() {
    this.$api.element.fetchDemo({}).then(res => console.log(res))
  }
}
</script>

<style>
</style>
