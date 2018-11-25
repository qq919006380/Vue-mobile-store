<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(img,index) in imgs" :key="index"><img :src="img.img" alt=""></mt-swipe-item>        
        </mt-swipe>
        <div>
            <my-ul v-for="(grid,index) in grids" :key="index">
                <my-li>
                    <a href="">
                        <span :class="grid.className"></span>
                        <div>{{grid.title}}</div>
                    </a>
                </my-li>
            </my-ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'hoem',
    data(){
        return{
            imgs:[],
            grids:[
                {className:"t",title:"新闻咨询"},
                {className:"t",title:"新闻咨询"},
                {className:"t",title:"新闻咨询"},
                {className:"t",title:"新闻咨询"},
                {className:"t",title:"新闻咨询"},
                {className:"t",title:"新闻咨询"},
            ],

        }
    },
    created(){
        this.$axios.get('https://www.easy-mock.com/mock/5bf7e9c8aba173389770125c/vue/vueImg')
        .then(res=>{
            this.imgs=res.data.message
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
</script>
<style scoped>
    .mint-swipe{
        height: 200px;
    }
    img{
        width: 100%
    }
    
    
    ul>a{
        display: block
    }
    ul>li span{
        display: inline-block;
        width: 50px;
        height: 50px;
        background-image: url('../../assets/logo.png');
        background-size: 100%
    }
    
    
</style>

