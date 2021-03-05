export default {
   addToCart(state, product) {
     const productInCart = state.cartItems.find(({_id}) => _id === product._id)
    if (productInCart) {
      const currrentProducts = state.cartItems
      state.cartItems = currrentProducts.filter(({_id}) => _id !== product._id)
    } else {
      state.cartItems.push(product)
    }
  },
  setPaymentError(state, err) {
    state.paymentError = err
  },
  clearCart(state) {
    state.cartItems = []
  }
}