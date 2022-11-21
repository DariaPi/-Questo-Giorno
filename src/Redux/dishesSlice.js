import { createSlice } from '@reduxjs/toolkit';

export const dishesSlice = createSlice ({
    name: 'dishCategory',
    initialState: {
        selectedCategory: "All"
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const getSelectedCategory = state => state.dishCategory.selectedCategory;
export const { filterCategory } = dishesSlice.actions;
export default dishesSlice.reducer;