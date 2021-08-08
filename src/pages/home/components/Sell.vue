<template>
  <div class="sell">
    <goods :goodsList="goods"></goods>
  </div>
</template>

<script>
  import Goods from 'components/content/goods/Goods'

  // 导入封装好的请求函数
  import HomeReq from 'network/home'

  export default {
    name: 'Sell',
    components: {
      Goods
    },
    data() {
      return {
        goods: []
      }
    },
    activated() {
      // Sell组件展示百度接口的后15条数据
      HomeReq.getImages().then(res => {
        let tmpArr = res.data.data
        // 取出数组的前十五项
        for(let i = 0;i <= 15;i ++) {
          tmpArr.shift()
        }
        tmpArr.pop()
        this.goods = tmpArr
      })
    }
  }
</script>

<style scoped>
  .sell {
    line-height: 25px;
  }
</style>