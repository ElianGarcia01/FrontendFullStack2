import { createReducer } from "@reduxjs/toolkit";
import {
  changeSearch,
  changeCategory,
  getProducts,
  deleteProducts,
  updateProducts
} from "../actions/shopActios"

export const statusHttp = {
  IDLE: "idle",
  SUCCED: "succes",
  FAILE: "failed",
  PENDING: "pending",
};

const productsState = {
  products: [],
  status: statusHttp.IDLE,
  error: null,
};

const initialState = {
  productsState: productsState,
  category: "Todas",
  search: "",
};

export const shopReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCategory, (state, action) => {
    state.category = action.payload;
  });

  builder.addCase(changeSearch, (state, action) => {
    state.search = action.payload;
  });

  builder.addCase(getProducts.fulfilled, (state, action) => {
    console.log("La solicitud fue exitosa");
    const productsState = state.productsState;
    productsState.products = action.payload;
    productsState.status = statusHttp.SUCCED;
  });

  builder.addCase(getProducts.pending, (state) => {
    console.log("La solicitud fue pending");
    const productsState = state.productsState;
    productsState.status = statusHttp.PENDING;
  });

  builder.addCase(getProducts.rejected, (state, action) => {
    console.log("La solicitud fue error");
    const productsState = state.productsState;
    productsState.status = statusHttp.PENDING;
    productsState.error = action.error;
  });

  builder.addCase(deleteProducts.fulfilled, (state, action) => {
    console.log("La eliminacion fue exitosa");
    const productsState = state.productsState;
    productsState.products = productsState.products.filter(product => product.id !== action.payload.id)
  })

  builder.addCase(updateProducts.fulfilled, (state, action) => {
    console.log("La actualizacion fue exitosa");
    const productsState = state.productsState;
    productsState.products = productsState.products.map(product => product.id === action.payload.id ? action.payload : product)
  })
});
