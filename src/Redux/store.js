import { configureStore } from "@reduxjs/toolkit";
import dishCategory from './dishesSlice';
import cart from './cartSlice';

export const store = configureStore ({
    reducer: {
        dishCategory,
        cart
    }
})