import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const productModule = {
  state: {
    product: {},
    products: [],
    productError: null
  },
  actions,
  mutations,
  getters
}

export default productModule
