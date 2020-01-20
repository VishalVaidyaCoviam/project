// export default{
//     api:{
//         base_path:{
//             auth:'0.0.0.0:3000'
//         },
//         login:{
//             login:'/login'
//         },
//         merchant:{
//             merchant:'/merchant',
//             product: function(productId) {
//                 return 'merchant/product/'+productId;
//             }
//             // fetchMercant: function (merchId) {
//             //     return '/merchant/'+ merchId 
//             // }
//         },
//         cartOrder:{
//             cartOrder:'/cartOrder'
//         },
//         product:{
//             productDetails:function(productId) {
//                 return '/product/details/'+productId;
//             }
//         },
//         search:{
//             popularProducts:'/solrsearch/popular'
//         }
//     },
//     getApiPath: function(apiPath) {
//         return 'http://' + this.api.base_path.auth + apiPath
//     }
// }