import { createAction } from "@reduxjs/toolkit";


const changeSearch = createAction("shop/changeSearch")
const changeCategory = createAction("shop/changeCategory")


export { changeSearch , changeCategory }
