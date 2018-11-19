<template>
  <div id="app">
    <mt-header fixed title="项目信息管理系统"></mt-header>
    <router-view></router-view>
    <mt-bottom></mt-bottom>
  </div>
  
</template>

<script>
import mtBottom from "@/components/mtBottom.vue";

export default {
  name: "app",
  components: {
    mtBottom
  }, 
  data() {
    return {
      
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
