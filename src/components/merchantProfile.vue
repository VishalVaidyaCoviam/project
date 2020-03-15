<template>
<div class="al-cn">
    <div class="card">
        <img :src="pic" alt="" style="width:100%" class="image">
        <h1>{{merchantProfileGetter.merchantName}}</h1>
        <h3 class="title"> Seller at BarleyKart</h3>
        <div class="row">
            <div class="column">
                <div>Number : </div><br>
                <div>Email : </div><br>
                <div>Address : </div><br>
                <div>Rating : </div><br>
            </div>
            <div class="column">
                <div>{{merchantProfileGetter.mobileNo}}</div><br>
                <div>{{merchantProfileGetter.merchantEmail}}</div><br>
                <div>{{merchantProfileGetter.merchantAddress}}</div><br>
                <div>{{merchantProfileGetter.merchantRating}}</div><br>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import user from "../assets/user.svg";
import {mapGetters} from 'vuex'
export default {
    data: () => {
        return{
            pic:user
        }
    },
    mounted() {
    this.$store.dispatch('getMerchantProfile');
        if(localStorage.getItem('userAccessToken') == null )
            this.$router.push({path : '/login'})
    },
    computed: {
        ...mapGetters(['merchantProfileGetter'])
    }
}
</script>
<style scoped>
    .al-cn{
        text-align: -webkit-center;
    }

    .image{
    height: 100px;
    width: 100px;
    margin-right: 20px;
    justify-content: space-around;
    cursor: pointer;
    }
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        max-width: 500px;
        margin: auto;
        text-align: center;
        margin-top: 100px;
        background-color:whitesmoke;
        }

    .title {
        color: grey;
        font-size: 18px;
        }
    .row{
        display:flex;
        flex-direction: row;
        justify-content:space-around;
    }
    .column{
        display:flex;
        flex-direction: column;
    }

</style>