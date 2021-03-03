import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default {
  state: {
    category: {},
    categories: [],
    categoryError: null
  },
  actions,
  mutations,
  getters
}