import { getPaymentIntent } from "@/services/payment.service"

export default {
  addToCart({ commit }, product) {
    commit("addToCart", product)
  },
  async handleBuy({ getters, commit }) {
    try {
      const indent = await getPaymentIntent({ amount: getters.cartTotalPrice })
      return indent;
    } catch (err) {
      commit("setPaymentError", err)
    }
  },
};
