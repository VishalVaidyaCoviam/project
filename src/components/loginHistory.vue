<template>
<div al-cn>
    <!-- {{userLoginHistoryGetter.data}} -->
    <h1>Login History</h1>
    <div class="flex-container">
            <table class="">
                <tr>
                    <th> Time </th>
                    <th> Type (Web or App) </th>
                </tr>
                <tr v-for="value in userLoginHistoryGetter.data" v-bind:key="value.loginHistoryId">
                    <td>{{value.lastLogin}}</td>
                    <td>{{value.typeOfAccess}}</td>
                </tr>
            </table>
    </div>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: "LoginHistory",
    data(){
        return{
            value:''
        }
    },
    mounted() {
        if(localStorage.getItem('userAccessToken'))
      this.$router.push({name:'merchanthome'})
        if(localStorage.getItem('jwtToken') == null)
            this.$router.push({path:'/login'})  

       this.$store.dispatch('getUserLoginHistory');  
       
    },
    computed: {
        ...mapGetters (['userLoginHistoryGetter'])
    },
}
</script>
<style scoped>
    table{
        width: 50%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        font-family:fantasy;
        font-weight:bold;
        margin-top: 50px;
        justify-content: center;
        text-align: center;
    }
    .flex-container{
        display: flex;
        justify-content: center;
    }
    .al-cn{
        text-align: -webkit-center;
    }
</style>