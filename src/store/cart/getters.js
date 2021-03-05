export default {
  cartItems: ({cartItems}) => cartItems,
  cartCount: ({cartItems}) => cartItems.length,
  cart: ({cart}) => cart,
  cartTotalPrice: ({cartItems}) => cartItems.reduce((total, item) => total + item.price, 0),
  paymentError: ({paymentError}) => paymentError
}