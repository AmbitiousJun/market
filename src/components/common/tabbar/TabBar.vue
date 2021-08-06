<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    /* 让tab栏沉到底部 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /* 添加阴影 */
    box-shadow: 0 -1px 8px rgba(100,100,100,0.2);
  }

</style>
