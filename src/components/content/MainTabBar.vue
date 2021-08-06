<template>
  <tab-bar>
    <tb-item path="/home">
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tb-item>
    <tb-item path="/category">
      <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tb-item>
    <tb-item path="/cart">
      <img slot="item-icon" src="@/assets/img/tabbar/cart.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/cart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tb-item>
    <tb-item path="/profile">
      <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tb-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TbItem from "components/common/tabbar/TbItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TbItem
    }
  }
</script>

<style scoped>

</style>
