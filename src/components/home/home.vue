<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(img,index) in imgs" :key="index"><img :src="img.img" alt=""></mt-swipe-item>        
        </mt-swipe>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
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
        width: 30%;
        background: pink
    }
</style>

