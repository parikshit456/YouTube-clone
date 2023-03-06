import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./videos/videoSlice";

export const store = configureStore({
    reducer:{
        videos: videoSlice
    },
});