import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
    reducer: {
        // Add reducers here
        app: appSlice,
    },
});

export default store;