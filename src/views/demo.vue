<template>
  <div class="demo">
    <div class="content-wrapper">
      <button>click</button>
      <div class="content">
        <button>点我</button>
      </div>
      <goods-rating :score="4"></goods-rating>
    </div>
  </div>
</template>

<script>
  import GoodsRating from '@/components/rating2'

  export default {
    name: 'Demo',
    components: {GoodsRating},
    mounted () {
    }
  }
</script>

<style>
</style>
