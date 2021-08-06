<template>
  <!-- 顶部导航栏 开始 -->
  <nav-bar class="home-nav">
    <div slot="center">购物商城</div>
  </nav-bar>
  <!-- 顶部导航栏 结束 -->
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: 'Home',
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }
</style>