import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const changeSearch = createAction("shop/changeSearch")
const changeCategory = createAction("shop/changeCategory")

// Peticion https
const getProducts = createAsyncThunk("shop/getProducts", async () => {
  const response = await axios.get("https://fakestoreapi.com/products")
  return response.data;
})

export { changeSearch, changeCategory, getProducts }
