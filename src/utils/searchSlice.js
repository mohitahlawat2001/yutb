import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        
    },
    reducers: {
        setSearchInput: (state, action) => {
            state = {...action.payload,...state}
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
    },
});

export const { setSearchInput, setSearchResults } = searchSlice.actions;
export default searchSlice.reducer;