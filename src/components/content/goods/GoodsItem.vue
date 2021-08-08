<template>
  <div class="goods-item">
    <img :src="image" />
    <div class="text-wrap">
      <span v-html="goodsTitle"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsItem',
    props: {
      image: {
        type: String,
        default() {
          return ''
        }
      },
      goodsTitle: {
        type: String,
        default() {
          return ''
        }
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    width: 45vw;
    box-shadow: 3px 3px 8px rgba(100, 100, 100, 0.2);
    border-radius: 10px;
    margin: 10px 5px;
  }

  .goods-item img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    height: auto;
  }

  .text-wrap {
    padding: 10px 5px;
    background-color: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
</style>