import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios';
import Router from 'vue-router';
import router from './router'
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.prototype.$axios=Axios//配置Axios
Vue.use(MintUi)
Vue.use(Router)

Axios.defaults.baseURL='http://xxxx'//配置公共URL
Vue.config.productionTip = false; 


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
