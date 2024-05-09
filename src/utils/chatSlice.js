import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages : []
    },
    reducers:{
        addMessage : (state,action) =>{
            state.messages.unshift(action.payload);
            if(state.messages.length > 20){
                state.messages.pop()
            }
        }
    }
    
    });

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;