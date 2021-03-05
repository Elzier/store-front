import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default {
  state: {
    cart: {
      total: 0 
    },
    cartItems: [],
    cartCount: 0,
    paymentError: null
  },
  actions,
  mutations,
  getters
}