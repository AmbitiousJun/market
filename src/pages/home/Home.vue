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
    <!-- Tab控制栏 开始 -->
    <tab-control :titles="titles"/>
    <!-- Tab控制栏 结束 -->
    <router-view/>
    
    <Footer/>
  </div> 
</template>

<script>
  // 页内组件
  import Swiper from './components/Swiper.vue'
  import Cat from './components/Cat.vue'
  // 公共组件
  import TabControl from 'components/content/TabControl.vue'
  import NavBar from 'components/common/navbar/NavBar'
  import Footer from 'components/content/Footer.vue'
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
        floorList: [],
        // 百度图片
        images: []
      }
    },
    computed: {
      titles() {
        return [
          {name: '流行', route: '/home/floor'},
          {name: '新款', route: '/home/new'},
          {name: '潮流', route: '/home/sell'}
        ]
      }
    },
    components: {
      NavBar,
      Swiper,
      Cat,
      Footer,
      TabControl
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
      // 3 请求百度图片
      HomeReq.getImages().then(res => {
        this.images = res.data.data
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }

  #home {
    padding-top: 44px;
  }
</style>