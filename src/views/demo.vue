<template>
  <div>
    demo
  </div>
</template>

<script>
export default {
  name: 'Demo',
  mounted() {
    this.$api.element.fetchDemo({}, res => console.log(res))
  }
}
</script>

<style>
</style>
