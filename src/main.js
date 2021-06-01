import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
