import Vue from 'vue'
import Vuex from 'vuex'
import evalInput  from "./model/evalInput";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalIncObject:[],
    totalExpObject:[]
  },
  mutations: {
    insertToList:function(state,input){
      state.totalIncObject.push(input)
    },
    insertExpList:function(state,input){
      state.totalExpObject.push(input)
    },
    removeExpItem(state,inp){
      let index;
      for (let i=0;i<state.totalExpObject.length;i++){
        if(state.totalExpObject[i].text===inp){
           index=i
        }
      }
      delete state.totalExpObject[index]
      state.totalExpObject=state.totalExpObject.filter(e=>e!=null)
    },
    removeIncItem(state, inp){
      let index;
      for (let i=0;i<state.totalIncObject.length;i++){
        if(state.totalIncObject[i].text===inp){
          index=i
        }
      }
      delete state.totalIncObject[index]
      state.totalIncObject=state.totalIncObject.filter(e=>e!=null)
    }
  },
  actions: {

  },
  getters:{
    resolveTotalIncObject(state){
      return state.totalIncObject
    },
    resolveTotalExpObjext(state){
      return state.totalExpObject
    }
  },
  modules:{
    evalInput
  },
  plugins: [createPersistedState({
    paths:['totalIncObject','totalExpObject']
  })]
})
