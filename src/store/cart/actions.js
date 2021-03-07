import { getPaymentIntent } from '@/services/payment.service'

export default {
  addToCart({ commit }, product) {
    commit('addToCart', product)
  },
  async handleBuy({ commit }, data) {
    try {
      const indent = await getPaymentIntent(data)
      return indent
    } catch (err) {
      commit('setPaymentError', err)
    }
  },
}
