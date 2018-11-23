<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(img,index) in imgs" :key="index"><img :src="img.img" alt=""></mt-swipe-item>        
        </mt-swipe>
        <ul>
            <li>
                <a href="">
                    <span></span>
                    <div>新闻咨询</div>
                </a>
            </li>
            <li>
                <a href="">
                    <span></span>
                    <div>新闻咨询</div>
                </a>
            </li>
            <li>
                <a href="">
                    <span></span>
                    <div>新闻咨询</div>
                </a>
            </li>
            <li>
                <a href="">
                    <span></span>
                    <div>新闻咨询</div>
                </a>
            </li>
            <li>
                <a href="">
                    <span class="bg"></span>
                    <div>新闻咨询</div>
                </a>
            </li>
            <li>
                <a href="">
                    <span></span>
                    <div>新闻咨询</div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'hoem',
    data(){
        return{
            imgs:[]
        }
    },
    created(){
        this.$axios.get('https://www.easy-mock.com/mock/5bf7e9c8aba173389770125c/vue/vueImg')
        .then(res=>{
            this.imgs=res.data.message
        })
        .catch(err=>{
            alert(err)
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
    ul>li{
        list-style: none;
        float: left;
        width: 33.3%;
        background: pink;
        text-align: center;
        height: 100px;
        line-height: 100px
    }
    ul{
        margin: 0;
        padding: 0
    }
    .bg{
        background: image("../../assets/logo.png")
    }
</style>

