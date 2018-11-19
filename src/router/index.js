import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld.vue';

import Home from '@/components/home/home';
import Member from '@/components/member/member';
import Search from '@/components/search/search';
import Shopcart from '@/components/shopcart/shopcart';

Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/home',
            name:'home',
            component:Home
        },
        {
            path:'/member',
            name:'member',
            component:Member
        },
        {
            path:'/search',
            name:'search',
            component:Search
        },
        {
            path:'/shopcart',
            name:'shopcart',
            component:Shopcart
        }
    ]
})

