import { configureStore } from '@reduxjs/toolkit'
import products from "./modules/products.js";


export const store = configureStore({
    reducer: {
        products,
    }
})
