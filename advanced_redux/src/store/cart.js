import { createSlice } from '@reduxjs/toolkit';

const initialShowState = { isVisible: false }

const cartSlice = createSlice({
    name: 'cart_visibility',
    initialState: initialShowState,
    reducers: {
        toggleCartItems(state) {
            state.isVisible = !state.isVisible;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;