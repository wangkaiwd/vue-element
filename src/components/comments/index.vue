<template>
  <div class="goods-comments">
    <div class="tag-container">
      <h3>商品评论</h3>
      <ul class="tag">
        <li :class="['tag-item',tagClass[i]]"
            @click="activeIndex=i"
            v-for="(tag,i) in tagConfig"
            :key="tag.text">
          <span class="tag-text">{{tag.text}}</span>
          <span class="tag-number">{{tag.number}}</span>
        </li>
      </ul>
    </div>
    <div class="only-content-wrapper">
      <div class="only-content">
        <base-icon @click="onlyContent"
                   class="icon-checkmark"
                   :class="{active}"
                   icon="checkmark">
        </base-icon>
        只看有内容的评价
      </div>
    </div>
    <div class="ratings-wrapper">
      <ul class="ratings">
        <li>
          <p class="desc">
            <span class="date"></span>
            <span class="user"></span>
          </p>
          <p class="text">

          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsComments',
    props: {
      tagConfig: {
        type: Array,
        required: true
      },
      ratings: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        tagClass: ['all', 'recommend', 'tease'],
        active: false,
        activeIndex: 0
      }
    },
    computed: {},
    methods: {
      onlyContent () {
        console.log('click')
        this.active = !this.active
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "~styles/varibale";

  .goods-comments {
    .tag-container { padding: .36rem;}
    .tag {display: flex;}
    .tag-item {
      margin-top: .36rem;
      padding: .16rem .12rem;
      font-size: 12px;
      border-radius: 0.04rem;
      color: #4d555d;
      &:not(:last-child) {margin-right: .16rem;}
      &.all {background-color: #00a0dc;color: #fff;}
      &.recommend {background-color: rgba(0, 160, 220, .2);}
      &.tease {background-color: rgba(77, 85, 93, .2);}
    }
    .only-content {
      display: flex;
      align-items: center;
      .icon-checkmark {
        font-size: 24px;margin-right: .16rem;
        &.active {color: #00c850;}
      }
      border-bottom: 1px solid @border-color;
      border-top: 1px solid @border-color;
      padding: .24rem .36rem;
      font-size: 12px;
      color: rgb(147, 153, 159);
    }
  }
</style>
