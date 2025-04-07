import { configureStore } from "@reduxjs/toolkit"
import {shopReducer} from "../store/reducers/shopReducer"


const store = configureStore({
    reducer: {shop: shopReducer}
})

export default store