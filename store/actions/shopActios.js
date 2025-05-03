import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const changeSearch = createAction("shop/changeSearch");
const changeCategory = createAction("shop/changeCategory");

// Peticion https para obtener la data de productos
const getProducts = createAsyncThunk("shop/getProducts", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

// Peticion https para eliminar data de productos
const deleteProducts = createAsyncThunk("shop/deleteProducts", async (id) => {
  const response = await axios.delete(
    `https://fakestoreapi.com/products/${id}`
  );
  return response.data;
});

// Peticion https para actualizar data de productos
const updateProducts = createAsyncThunk(
  "shop/updateProducts",
  async (product) => {
    const updateProduct = { ...product, title: "New Product" };

    const response = await axios.put(
      `https://fakestoreapi.com/products/${product.id}`, updateProduct
    );
    return response.data;
  }
);

export {
  changeSearch,
  changeCategory,
  getProducts,
  deleteProducts,
  updateProducts,
};
