<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    line-height: 6.6vh;
    height: 6.6vh;
    box-shadow: 0 1px 8px rgba(100, 100, 100, 0.2);
  }

  .left,
  .right {
    width: 16vw;
  }

  .center {
    flex: 1;
    text-align: center;
  }
</style>