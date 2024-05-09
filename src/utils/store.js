import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer: {
        // Add reducers here
        app: appSlice,
        search: searchSlice,
    },
});

export default store;