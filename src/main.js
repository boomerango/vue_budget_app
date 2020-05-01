import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//initialize bootstrap
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BIcon } from 'bootstrap-vue'
Vue.component('b-icon', BIcon)

Vue.use(BootstrapVue,BootstrapVueIcons)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
