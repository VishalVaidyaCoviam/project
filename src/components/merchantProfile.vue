<template>
<div class="al-cn">
    <div class="card">
        <img :src="pic" alt="" style="width:100%" class="image">
        <h1>{{merchantProfileGetter.merchantName}}</h1>
        <p class="title"> Seller at BarleyKart</p>
        <div class="row">
            <div>Number : </div>
            <div>{{merchantProfileGetter.mobileNo}}</div>
        </div><br>
        <div class="row">
            <div>Email : </div>
            <div>{{merchantProfileGetter.merchantEmail}}</div>
        </div><br>
        <div class="row">
            <div>Address : </div>
            <div>{{merchantProfileGetter.merchantAddress}}</div>
        </div><br>
        <div class="row">    
            <div>Rating : </div>
            <div>{{merchantProfileGetter.merchantRating}}</div>
        </div><br>
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
        max-width: 300px;
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
        justify-content:center;
    }

</style>