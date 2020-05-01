//import createPersistedState from "vuex-persistedstate";

export default {
    state: {
        addNum:Number(localStorage.getItem('addNum'))||0,
        releaseNum:Number(localStorage.getItem('releaseNum'))||0,
        balance: Number(localStorage.getItem('balance'))||0,
    },
    mutations: {
        addIncome(state,input){
            state.balance+= Number(input);
            state.addNum+= Number(input);
            localStorage.setItem('addNum',state.addNum)
            localStorage.setItem('balance',state.balance)

        },
        removeIncome(state,input){
            state.balance-= Number(input);
            state.releaseNum+= Number(input);
            localStorage.setItem('releaseNum',state.releaseNum)
            localStorage.setItem('balance',state.balance)
        }
    },
    actions: {

    },
    getters:{
        balance(state){
            return Number(state.balance)
        },
        expanditures(state){
            return state.releaseNum
        },
        totalIncome(state){
            return state.addNum
        }
    }
}
