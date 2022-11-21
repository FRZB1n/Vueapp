import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)
const store = new vuex.Store({
    actions:{
         AUPDCARDCOST({commit}, price){
            commit('UpdateCardCost', price)
        }
    },
    state:{
        TotalCardCost:0
    },
    getters:{
        TotalCardcost(state){
            return state.TotalCardCost
        }
    },
    mutations:{
        UpdateCardCost(state, price){
            
            state.TotalCardCost = price
        }
    }
})

export default store