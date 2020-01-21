<template>
    <div>
    <Header></Header>
    <router-view></router-view>
    <Homef></Homef>
    </div>
</template>
<script>
import Homef from '@/components/Foot.vue';
import Header from '@/components/Header.vue';
export default {
    components : {
        Homef
        ,
        Header
    }
}
</script>
<style>
</style>
