import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart'

const store = configureStore({
    reducer: {
        cart_slice_data: cartSlice
    }
});

export default store;
