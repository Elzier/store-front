import Vue from 'vue'
import Vuex from 'vuex'
import productModule from './product'
import categoryModule from './category'
import cartModule from './cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product: productModule,
    category: categoryModule,
    cart: cartModule
  },
})
