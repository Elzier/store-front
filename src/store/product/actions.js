import {getProduct, getProducts} from '@/services/products.service'

export default {
  async fetchProduct({commit}, id) {
    try {
      const product = await getProduct(id)
      commit('setProduct', product)
    } catch(err) {
      commit('setProductError', err)
    }
  },
  async fetchProducts({commit}) {
    try {
      const products = await getProducts()
      commit('setProducts', products)
    } catch(err) {
      commit('setProductError', err)
    }
  }
}