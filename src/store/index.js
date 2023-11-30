import { configureStore } from '@reduxjs/toolkit'
import products from "./modules/products.js";
import auth from './modules/auth'

export const store = configureStore({
    reducer: {
        products,
        auth,
    }
})
