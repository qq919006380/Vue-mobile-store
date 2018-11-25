<template>
    <li>
        <slot></slot>
    </li>
</template>

<script>
export default {
    name:"my-li",
    data(){
        return {

        }
    }
}
</script>

<style scoped>
    ul>li{
        list-style: none;
        float: left;
        width: 33.3333%;
        background: pink;
        text-align: center;
    }
</style>
