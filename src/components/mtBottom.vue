<template>
  <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="../assets/logo.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img slot="icon" src="../assets/logo.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <img slot="icon" src="../assets/logo.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="../assets/logo.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import "mint-ui/lib/style.css";

export default {
  name: "mt-bottom",
  data() {
    return {
      selected: ""
    };
  },
  watch: {
    selected(newV) {
      this.$router.push({
        name:newV
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
</style>
