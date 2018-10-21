<template>
    <div class="goods-comments">
      <div class="tag-container">
        <h3>商品评论</h3>
        <ul class="tag">
          <li :class="['tag-item',tagClass[i],{active: i===activeIndex}]"
              @click="changeType(tag,i)"
              v-for="(tag,i) in tagConfig"
            :key="tag.text">
            <span class="tag-text">{{tag.text}}</span>
            <span class="tag-number">
            {{tag.count}}
          </span>
          </li>
        </ul>
      </div>
    <div class="only-content-wrapper">
      <div class="only-content">
        <base-icon @click="$emit('update:onlyContent', !onlyContent)"
                   class="icon-checkmark"
                   :class="{active:onlyContent}"
                   icon="checkmark">
        </base-icon>
        只看有内容的评价
      </div>
    </div>
  </div>
</template>

<script>
  const ALL = 2
  const POSITIVE = 0
  const NEGATIVE = 1
  export default {
    name: 'GoodsComments',
    props: {
      desc: { // 文字描述
        type: Object,
        required: true
      },
      onlyContent: { // 是否只看有内容的评价
        type: Boolean,
        default: false
      },
      ratings: { // 评价列表
        type: Array,
        required: true
      }
    },
    data () {
      return {
        tagClass: ['all', 'recommend', 'tease'],
        activeIndex: 0,
      }
    },
    computed: {
      tagConfig () {
        const {desc, ratings, negative, positive} = this
        return [
          {text: desc.all, count: ratings.length, type: 'all'},
          {text: desc.positive, count: positive.length, type: 'positive'},
          {text: desc.negative, count: negative.length, type: 'negative'}
        ]
      },
      negative () {
        return this.ratings.filter(rate => rate.rateType === NEGATIVE)
      },
      positive () {
        return this.ratings.filter(rate => rate.rateType === POSITIVE)
      }
    },
    methods: {
      changeType (tag, i) {
        this.activeIndex = i
        // 这里要进行一次深拷贝才能将内容传递给父组件，否则的话会通过引用修改子组件中computed中的数据
        const data = (this[tag.type] ? JSON.parse(JSON.stringify(this[tag.type])) : this.ratings)
        this.$emit('changeType', data)
      },
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
      &.all {
        background-color: rgba(0, 160, 220, .2);
        &.active {background-color: #00a0dc;color: #fff;}
      }
      /*&.all {background-color: #00a0dc;color: #fff;}*/
      &.recommend {
        background-color: rgba(0, 160, 220, .2);
        &.active {background-color: #00a0dc;color: #fff;}
      }
      &.tease {
        background-color: rgba(77, 85, 93, .2);
        &.active {background-color: #4d555d;color: #fff;}
      }
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
