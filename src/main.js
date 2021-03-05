import Vue from 'vue'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserSecret, faShoppingCart, faAngry} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'


import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

// Vue.config.productionTip = false

library.add(faUserSecret, faShoppingCart, faAngry)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
