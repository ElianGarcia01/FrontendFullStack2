import { configureStore } from "@reduxjs/toolkit"
import {shopReducer} from "../store/reducers/shopReducer"
import { CartReducer } from "./reducers/cartReducer"


const store = configureStore({
    reducer: {
        shop: shopReducer,
        cart: CartReducer
    }
})

export default store