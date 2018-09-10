<template>
  <div class="base-icon" @click="$emit('click')">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="`#elem-${icon}`"></use>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'BaseIcon',
    props: {
      icon: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="less" scoped>
  .base-icon {
    display: inline-block;
    .icon {
      width: 1em;
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
  }
</style>
