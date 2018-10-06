<template>
  <div class="goods">
    <div class="goods-wrapper">
      <!--这里其实没有必要将这俩部分进行组件拆分，拆分之后会增加组件的复杂程度
        不过在这里可以练习组件传参
      -->
      <goods-aside @scrollToEl="$refs.goodsList.scrollTop($event)"
                   :goodsData="goodsData">
      </goods-aside>
      <goods-list ref="goodsList"
                  v-if="goodsData.length"
                  :goodsData="goodsData"
                  @updateFood="updateFood">
      </goods-list>
    </div>
    <goods-cart @updateSelectFood="updateSelectFood"
                :selectFood="selectFood"
                :deliveryPrice="seller.deliveryPrice"
                :minPrice="seller.minPrice">
    </goods-cart>
  </div>
</template>

<script>
  import GoodsAside from './components/aside'
  import GoodsList from './components/list'
  import GoodsCart from './components/cart'

  export default {
    name: 'goods',
    props: {
      seller: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        goodsData: [],
        selectFood: []
      }
    },
    components: {GoodsAside, GoodsList, GoodsCart},
    mounted () {
      this.$api.element.fetchGoods({}, res => {
        this.goodsData = res.goods
      })
    },
    methods: {
      updateFood (data, index1, index2) {
        // this.goodsData[index2].foods[index1].count = data.count
        data.index2 = index2
        data.index1 = index1
        this.$set(this.goodsData[index2].foods, index1, data)
        //这里要用三等号，因为item.name === data.name这是条件语句，而不是赋值语句
        const temp = this.selectFood.findIndex(item => item.name === data.name)
        if (temp > -1) {
          // 利用索引直接设置一个项时，vue不能在视图层检测到数组的变动
          // this.selectFood[temp].count = data.count
          if (data.count <= 0) {
            this.selectFood.splice(temp, 1)
            return
          }
          this.$set(this.selectFood, temp, data)
        } else {
          this.selectFood.push(data)
        }
      },
      updateSelectFood (data, index) {
        // 正常情况下，列表中的每一个项都要有一个唯一标识的id来进行匹配
        this.$set(this.goodsData[data.index2].foods, data.index1, data)
        if (data.count <= 0) {
          this.selectFood.splice(index, 1)
          return
        }
        this.$set(this.selectFood, index, data)
      }
    }
  }
</script>

<style lang="less" scoped>
  .goods {
    display: flex;
    height: 100%;
    flex-direction: column;
    .goods-wrapper {
      display: flex;
      flex: 1;
    }
  }
</style>
