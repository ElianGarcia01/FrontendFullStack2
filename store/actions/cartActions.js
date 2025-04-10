import { createAction } from "@reduxjs/toolkit"

const addToCart = createAction("cart/addToCart")
const quitFromCart = createAction("cart/quitFromCart")
const removeFromCart = createAction("cart/removeFromCart")
const clearCart = createAction("cart/clearCart")



export { addToCart, quitFromCart, removeFromCart, clearCart }