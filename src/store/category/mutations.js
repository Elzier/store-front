export default {
  setCategory(state, category) {
    state.category = category
  },
  setCategories(state, categories) {
    state.categories = categories
  },
  setCategoryError(state, err) {
    state.categoryError = err
  }
}