<template>
    <NavHearder></NavHearder>
    <router-view></router-view>
    <NavFooter></NavFooter>
</template>
<script>
    import NavHearder from './../components/NavHearder';
    import NavFooter from './../components/NavFooter';
    export default{
        name:'home',
        components:{
            NavHearder,
            NavFooter
        }
    }
</script>