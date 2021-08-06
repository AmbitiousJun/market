<template>
  <div id="home">
    <!-- 顶部导航栏 开始 -->
    <nav-bar class="home-nav">
      <div slot="center">购物商城</div>
    </nav-bar>
    <!-- 顶部导航栏 结束 -->
    <!-- 轮播图 开始 -->
    <swiper :swiperList="swiperList" />
    <!-- 轮播图 结束 -->
    <!-- 导航菜单 开始 -->
    <cat :catItems="catItems"/>
    <!-- 导航菜单 结束 -->
  </div> 
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Swiper from './components/Swiper.vue'
  import Cat from './components/Cat.vue'
  // 导入封装好的请求函数
  import HomeReq from 'network/home'

  export default {
    name: 'Home',
    data() {
      return {
        // 轮播图数组
        swiperList: [],
        // 导航菜单
        catItems: [],
        // 楼层
        floorList: []
      }
    },
    components: {
      NavBar,
      Swiper,
      Cat
    },
    created() {
      // 组件创建完成时请求页面数据
      // 1 请求轮播图数据
      HomeReq.getSwiperData().then(res => {
        this.swiperList = res.message
      })
      // 2 请求导航菜单数据
      HomeReq.getCatItems().then(res => {
        this.catItems = res.message
      })
      // 3 请求楼层数据
      HomeReq.getFloorData().then(res => {
        this.floorList = res.message
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }
</style>