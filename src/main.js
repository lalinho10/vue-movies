import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import GlobalPlugin from './plugins/global'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store/store'


Vue.config.productionTip = false

Vue.use(GlobalPlugin)
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
