import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
    },
    reducers: {
        cacheResults : (state, action) => {
            state = Object.assign(state, action.payload);
            // if state size greater then 10 then remove the first element
            if(Object.keys(state).length > 10){
                delete state[Object.keys(state)[0]];
            }
        }
    }

});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;