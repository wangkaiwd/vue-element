<template>
  <div class="ratings">
    <div class="multiple">
      <div class="conclude">
        <div class="score-number">{{seller.score}}</div>
        <div class="score-text">综合评分</div>
        <div class="more-than">高于周边商家{{seller.rankRate}}%</div>
      </div>
      <div class="service">
        <div class="item">
          服务态度
          <goods-rating class="service-star"
                        :size="36"
                        :score="seller.serviceScore">
          </goods-rating>
          <span class="service-score">{{seller.serviceScore}}</span>
        </div>
        <div class="item">
          商品评分
          <goods-rating class="service-star"
                        :size="36"
                        :score="seller.foodScore">
          </goods-rating>
          <span class="service-score">{{seller.foodScore}}</span>
        </div>
        <div class="deliver-time">
          送达时间 <span>{{seller.deliveryTime}}分钟</span>
        </div>
      </div>
    </div>
    <div class="split"></div>
    <goods-comments :desc="desc"
                    :ratings="ratings">
    </goods-comments>
    <div class="comments-list-wrapper">
      <div class="comments-list-item"
           v-for="(rating,index) in ratings"
           :key="index">
        <div class="avatar">
          <img :src="rating.avatar" alt="">
        </div>
        <div class="content">
          <div class="content-name">
            <span>{{rating.username}}</span>
            <span>{{rating.rateTime | formatTime}}</span>
          </div>
          <div class="content-score">
            <goods-rating
              :score="rating.score"
              :size="24">
            </goods-rating>
          </div>
          <div class="content-text">
            {{rating.text}}
          </div>
          <div class="content-tag" v-if="rating.recommend.length!==0">
            <base-icon class="thumb-up" icon="thumb-up"></base-icon>
            <ul class="tag-item">
              <li v-for="(item,i) in rating.recommend"
                  :key="i">
                {{item}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import GoodsRating from '@/components/rating2'
  import GoodsComments from '@/components/comments'
  import { formatTime } from '@/utils/handleTime'

  export default {
    name: 'ratings',
    props: {
      seller: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        desc: {
          'all': '全部',
          'positive': '满意',
          'negative': '吐槽'
        },
        ratings: []
      }
    },
    components: {GoodsRating, GoodsComments},
    filters: {
      formatTime
    },
    mounted () {
      this.$api.Element.fetchRatings({}, res => {
        this.ratings = res.ratings
      })
    }
  }
</script>

<style lang="less" scoped>
  @import "~styles/mixins";
  @import "~styles/varibale";

  .ratings {
    .multiple {
      display: flex;
      padding: .36rem 0;
      font-size: 12px;
      color: #07111b;
      .score-number {
        font-size: 23px;
        color: rgb(255, 153, 0);
      }
      .score-text {
        margin-top: .12rem;
      }
      .more-than {
        font-size: 10px;
        color: #93999f;
        margin-top: .16rem;
      }
    }
    .conclude {
      padding: .12rem;
      width: 2.75rem;
      text-align: center;
      border-right: 1px solid rgba(7, 17, 27, .1);
    }
    .service {
      flex: 1;
      text-align: center;
      .item {
        margin-top: .16rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .service-star {
        margin-left: .24rem;
      }
      .service-score {
        margin-left: .24rem;
        font-size: 12px;
        color: rgb(255, 153, 0);
      }
      .deliver-time {
        padding-left: .6rem;
        text-align: left;
        margin-top: .16rem;
        span {margin-left: .12rem;color: rgb(147, 153, 159)}
      }
    }
    .comments-list-wrapper {
      padding: 0 .36rem;
      .comments-list-item {
        display: flex;
        padding: .36rem 0;
        border-bottom: 1px solid @border-color;
      }
      .avatar {
        width: .56rem;
        img {width: .56rem;height: .56rem;border-radius: 50%;}
      }
      .content {
        margin-left: .24rem;
        color: rgb(7, 17, 27);
        flex: 1;
      }
      .content-name {
        font-size: 10px;
        display: flex;
        justify-content: space-between;
        span:last-child {
          color: rgb(147, 153, 159);
        }
      }
      .content-score {margin-top: .08rem;}
      .content-text {
        margin-top: .12rem;
        font-size: 12px;
        line-height: .36rem;
      }
      .content-tag {
        margin-top: .12rem;
        display: flex;
      }
      .tag-item {
        display: flex;
        flex-wrap: wrap;
        margin-top: -.12rem;
        li {
          padding: .5em .12rem;
          margin-left: .16rem;
          margin-top: .12rem;
          max-width: 8em;
          .ell;
          font-size: 9px;
          color: rgb(147, 153, 159);
          border: 1px solid rgba(7, 17, 27, .1);
        }
      }
      .thumb-up,
      .thumb-down {
        margin-top: .5em;
        font-size: 12px;
      }
      .thumb-up {color: rgb(0, 160, 220);}
      .thumb-down {color: rgb(183, 187, 191);}
    }
  }
</style>
