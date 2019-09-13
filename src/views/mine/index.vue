<template>
    <div id="main">
        <Header title="个人"/>
        <Login />
        <Tabbar />
    </div>
</template>

<script>
import Header from '@/components/c_header';
import Tabbar from '@/components/c_tabbar';
import Login from '@/components/c_login';

export default {
    name:'Mine',
    components:{
        Header,
        Tabbar,
        Login
    }
}
</script>

<style lang="less" scoped>

</style>