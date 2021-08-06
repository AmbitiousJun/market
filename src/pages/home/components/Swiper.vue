<template>
  <el-carousel class="swiper" height="150px">
    <el-carousel-item class="swiper_item" v-for="(item, index) in swiperList" :key="index">
      <img :src="item.image_src"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    // 轮播图数组
    swiperList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  /* 轮播图 */
  .swiper {
    width: 100%;
    height: auto;
  }

  .swiper_item img {
    width: 100%;
  }
</style>