<template>
  <div id="footer">
    <span class="footer_text" v-text="'已经到底啦(>^ω^<)'"></span>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
  #footer {
    width: 100%;
    height: 60px;
    text-align: center;
    padding: 20px;
    /* 清除浮动 */
    overflow: hidden;
  }
</style>