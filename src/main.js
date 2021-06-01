import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store/store'


Vue.config.productionTip = false

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
