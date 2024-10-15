import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    select:false,
    search:"",
};

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        userFeatured: (state, action) => {
            state.select = action.payload;
        },
        userSearch: (state, action) => {
            state.search = action.payload;
        },
    },
});
export const {userFeatured, userSearch} = booksSlice.actions;
export default booksSlice.reducer;