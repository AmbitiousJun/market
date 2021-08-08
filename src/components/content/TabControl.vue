<template>
  <div class="tab_control">
    <div v-for="(item, index) in titles" 
        :key="index" 
        class="tab_control_item"
        :class="{active: index === curIndex}"
        @click="handleClick(index)"
        >
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    data() {
      return {
        curIndex: 0
      }
    },
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      handleClick(index) {
        if(this.curIndex !== index) {
          // 更新TabControl的高亮标头
          this.curIndex = index
          // 切换路由
          this.$router.push(this.titles[index].route)
        }
      }
    }
  }
</script>

<style scoped>
  .tab_control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    position: sticky;
    top: 6.5vh;
  }

  .tab_control_item {
    flex: 1;
  }

  .active span {
    padding: 5px;
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-tint);
    font-weight: 600;
  }
</style>