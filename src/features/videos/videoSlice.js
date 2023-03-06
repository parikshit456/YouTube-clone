import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchAsyncDetails = createAsyncThunk(
  "videos/fetchAsyncDetails",
  async (url) => {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    console.log("response", response.data);
    return response.data;
  }
);

export const fetchAsyncVideos = createAsyncThunk(
  "videos/fetchAsyncVideos",
  async (url) => {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    console.log("response", response.data);
    return response.data;
  }
);

const initialState = {
  videos: {},
  details: {},
  selectedCategory: "New",
  isLoading: true,
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    updateSelectedCategory: (state, { payload }) => {
      console.log(payload);
      state.selectedCategory = payload;
    },
    removeVideos: (state) => {
      state.videos = {};
    },
    removeDetails: (state) => {
      state.details = {};
    },
  },
  extraReducers: {
    [fetchAsyncDetails.pending]: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [fetchAsyncVideos.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        videos: payload,
      };
    },
    [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      return {
        ...state,
        isLoading: false,
        details: payload.items[0],
      };
    },
  },
});

export const { updateSelectedCategory, removeVideos, removeDetails } =
  videoSlice.actions;
export const getAllVideos = (state) => state.videos.videos;
export const getAllDetails = (state) => state.videos.details;
export const getLoading = (state) => state.videos.isLoading;
export const getSelectedCategory = (state) => state.videos.selectedCategory;

export default videoSlice.reducer;
