<template>
<div class="profile">
    <div><img src='' alt="No Image"></div>
    <div class="details">
        <table>
            <tr>
                <td>Name :</td>
                <td>{{merchantProfileGetter.merchantName}}</td>
            </tr>
            <tr>
                <td>Mobile:</td> 
                <td>{{merchantProfileGetter.mobileNo}}</td>
            </tr>
            <tr>
                <td>Email: </td>
                <td>{{merchantProfileGetter.merchantEmail}}</td>
            </tr>
            <tr>
                <td>Adderss:</td> 
                <td>{{merchantProfileGetter.merchantAddress}}</td>
            </tr>
            <tr>
                <td>Rating: </td>
                <td>{{merchantProfileGetter.merchantRating}}</td>
            </tr>
        </table>
    </div>
</div>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
    mounted() {
    this.$store.dispatch('getMerchantProfile');
    },
    computed: {
        ...mapGetters(['merchantProfileGetter'])
    }
}
</script>
<style>
    .profile{
        background-origin: padding-box;
        display: flex;
        flex-direction: column;
        flex-wrap:wrap;
        background-color: rgb(240, 230, 230);
        justify-content: center;
        align-items: stretch;
    }
    .details{
        font-size: 20px;
        font-weight: bold;
        margin: auto;
    }
</style>