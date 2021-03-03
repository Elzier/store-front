import {getCategory, getCategories} from '../../services/categories.service'

export default {
  async fetchCategory({commit}, id) {
    try {
      const category = await getCategory(id)
      commit('setCategory', category)
    } catch(err) {
      commit('setCategoryError', err)
    }
  },
  async fetchCategories({commit}) {
    try {
      const categories = await getCategories()
      commit('setCategories', categories)
    } catch(err) {
      commit('setCategoryError', err)
    }
  }
}