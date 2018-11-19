<template>
  <div id="app">
    <mt-header fixed title="项目信息管理系统"></mt-header>
    <router-view></router-view>
    <HelloWorld></HelloWorld>
  </div>
  
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import MintUi from "mint-ui";
import "mint-ui/lib/style.css";
import Router from 'vue-router';

export default {
  name: "app",
  components: {
    HelloWorld
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
