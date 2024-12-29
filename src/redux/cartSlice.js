import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addItemToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItem = state.cartItems.find(item => item.itemId === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({
          itemId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
          totalPrice: action.payload.quantity * action.payload.product.price
        });
      }
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(cartItem => cartItem.itemId !== action.payload.cartItemId)
    }
  },
});

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
export const getTotalPrice = state => {
  return state.cart.cartItems.reduce((total, cartItems) => {
    return cartItems.totalPrice + total
  }, 0)
}
export const getTotalQuantity = state => {
  return state.cart.cartItems.reduce((total, cartItems) => {
    return cartItems.quantity + total
  }, 0)
}
