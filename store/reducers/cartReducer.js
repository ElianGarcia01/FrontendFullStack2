import { createReducer } from "@reduxjs/toolkit"
import {
  addToCart,
  quitFromCart,
  removeFromCart,
  clearCart,
} from "../actions/cartActions"

const initialState = {}

export const CartReducer = createReducer(initialState, (builder) => {
  builder.addCase(addToCart, (state, action) => {
    const product = action.payload

    if (state[product.id]) {
      state[product.id].quantity += 1
    } else {
      state[product.id] = { ...product, quantity: 1 }
    }
  })

  builder.addCase(quitFromCart, (state, action) => {
    const product = action.payload

    if (state[product.id]) {
      state[product.id].quantity -= 1

      if (state[product.id].quantity <= 0) {
        delete state[product.id]
      }
    }
  })

  builder.addCase(removeFromCart, (state, action) => {
    const product = action.payload;

    if (state[product.id]) {
      delete state[product.id]
    }
  })

  builder.addCase(clearCart, () => {
    return initialState
  })
})
