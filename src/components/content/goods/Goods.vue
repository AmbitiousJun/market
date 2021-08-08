<template>
  <div class="Goods">
    <div class="left">
      <goods-item 
      v-for="(item, index) in leftList" 
      :key="index" 
      :image="item.middleURL"
      :goodsTitle="item.fromPageTitle"
      class="goods-item"
      />
    </div>
    <div class="right">
      <goods-item 
      v-for="(item, index) in rightList" 
      :key="index" 
      :image="item.middleURL"
      :goodsTitle="item.fromPageTitle"
      class="goods-item"
      />
    </div>
  </div>
</template>

<script>
  import GoodsItem from 'components/content/goods/GoodsItem'

  export default {
    name: 'Goods',
    data() {
      return {
        leftList: [],
        rightList: []
      }
    },
    props: {
      goodsList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsItem
    },
    activated() {
      if(this.leftList.length == 0 && this.rightList.length == 0) {
        let vue = this;
        this.goodsList.forEach((v, i) => {
          if(i % 2 == 0) {
            vue.leftList.push(v)
          }else {
            vue.rightList.push(v)
          }
      })
      }
    }
  }
</script>

<style scoped>
  .Goods {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .goods-item {
    z-index: -1;
    /* float: left; */
  }

</style>