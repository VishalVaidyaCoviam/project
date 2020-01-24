<template>
<div al-cn>
    <div class="flex-container">
            <table>
                <tr>
                    <th> Time </th>
                    <th> Type (Web or App) </th>
                </tr>
                <tr v-for="value in userLoginHistoryGetter" v-bind:key="value.lastlogin">
                    <td> value.lastlogin </td>
                    <td> value.type </td>
                </tr>
            </table>
    </div>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            value:''
        }
    },
    mounted() {
       this.$store.dispatch('getUserLoginHistory');    
    },
    computed: {
        ...mapGetters (['userLoginHistoryGetter'])
    },
}
</script>
<style scoped>
    table{
        font-size: 30px;
        font-family:arial;
        font-weight:bold;
        margin-top: 50px;
        max-width: 400px;
    }
    .flex-container{
        display: flex;
        justify-content: center;
    }
    .al-cn{
        text-align: -webkit-center;
    }
</style>