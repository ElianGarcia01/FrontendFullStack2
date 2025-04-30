import { createReducer } from "@reduxjs/toolkit";
import {
  changeSearch,
  changeCategory,
  getProducts,
} from "../actions/shopActios"

const statusHttp = {
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
});
