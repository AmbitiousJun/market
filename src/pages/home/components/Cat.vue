<template>
  <div class="cat_item_wrap">
    <div class="cat_item" v-for="(item, index) in catItems" :key="index">
      <img :src="item.image_src"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cat',
  props: {
    catItems: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .cat_item_wrap {
    display: flex;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 20px;
    border-bottom: 8px solid #eee;
  }

  .cat_item {
    flex: 1;
  }

  .cat_item img {
    width: 70px;
    height: 70px;
  }
</style>