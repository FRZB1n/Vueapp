import api from '../api'
export default {
    getUsers(){
        return api().get('users')
    },
    authorization(name, pass){
        return api().post('login', {name:name, pass:pass})
    },
    regestration(name,pass){
        return api().post('registr', {name:name, pass:pass})
    },

    getUserById(id){
        return api().post('userById', {_id:id})
    },
    // getNotifs(id){
    //     return api().post('notifs', {_id:id})
    // },
    getProducts(){
        return api().get('products')
    },
    getProductById(id){
        return api().post('productById', {_id:id})
    },
    addToCard(id,product){
        return api().post('addToCard',{_id:id, prod:product})
    },
    addToShop(name, about, cost){
        return api().post('addToShop', {name:name, about:about, cost:cost})
    },
    
    EditKorz(id, korzina){
        return api().post('EditKorz', {_id:id, card:korzina})
    }
}