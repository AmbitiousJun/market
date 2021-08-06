<template>
  <div class="tb-item" @click="handleClick">
    <div v-if="isActive"><slot name="item-icon-active"></slot></div>
    <div v-else><slot name="item-icon"></slot></div>
    <div :style="fontColor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TbItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#1296db'
      }
    },
    data() {
      return {

      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      fontColor() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      handleClick() {
        // 点击这个组件之后就跳转路由，路径变量由父组件传入
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tb-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tb-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 2px;
  }
</style>
