import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import { devServer } from '../vue.config'

Vue.use(vuetify)
Vue.config.productionTip = false

new Vue({
  data: {
    alldata: null
  },
  mounted () {
    axios
      .get(devServer)
      .then(response => this.alldata)
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
