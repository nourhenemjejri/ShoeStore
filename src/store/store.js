import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './productsSlice';

const store = configureStore({
    reducer: {
        products: productsSlice.reducer, // Utilisez .reducer ici
    }
});

export default store;