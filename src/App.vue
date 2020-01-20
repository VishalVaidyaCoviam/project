<template>
    <div>
    <router-view></router-view>
    <Homef></Homef>
    </div>
</template>
<script>
import Homef from '@/components/Foot.vue';
export default {
    components : {
        Homef,
    }
}
</script>
<style>
</style>
