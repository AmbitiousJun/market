<template>
  <div class="floor_wrap">
    <div class="floor" v-for="(item1, index1) in floorList" :key="index1">
      <!-- 每个楼层包括楼层标题和楼层内容 -->
      <img :src="item1.floor_title.image_src" class="floor_title">
      <div class="floor_item">
        <!-- 楼层内容分成两部分展示 -->
        <img :src="item2.image_src" v-for="(item2, index2) in item1.product_list" :key="index2">
      </div>
    </div>
  </div>
</template>

<script>
  // 导入封装好的请求函数
  import HomeReq from 'network/home'

  export default {
    name: 'Floor',
    data() {
      return {
        floorList: []
      }
    },
    props: {
      // floorList: {
      //   type: Array,
      //   default() {
      //     return []
      //   }
      // }
    },
    created() {
      // 请求楼层数据
      HomeReq.getFloorData().then(res => {
        this.floorList = res.message
      })
    }
  }
</script>

<style scoped>
  .floor {
    overflow: hidden;
  }

  .floor_title {
    height: 30px;
    margin-top: 10px;
  }

  .floor_item {
    height: 35vh;
  }

  .floor_item img {
    width: 32.5%;
    /* left浮动可以让图片往左侧靠拢而不是排成一整行 */
    float: left;
    box-shadow: 3px -1px 5px rgba(100, 100, 100, 0.2);
  }

  .floor_item img:nth-child(1) {
    border-left: 3px solid #fff;
    height: 100%;
  }

  .floor_item img:nth-child(2),
  .floor_item img:nth-child(3)
  {
    height: 50%;
    border-bottom: 5px solid #fff;
    border-left: 5px solid #fff;
  }

  .floor_item img:nth-child(4),
  .floor_item img:nth-child(5)
  {
    height: 50%;
    border-left: 5px solid #fff;
  }
</style>