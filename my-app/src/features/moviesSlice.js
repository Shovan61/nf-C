import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popular: [],
  highRate: [],
  bestFrom: [],
  newMovies: [],
  kids: [],
  ratedR: [],
  drama: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getPopular: (state, action) => {
      state.popular = action.payload;
    },
    gethighRate: (state, action) => {
      state.highRate = action.payload;
    },
    getbestFrom: (state, action) => {
      state.bestFrom = action.payload;
    },
    getnewMovies: (state, action) => {
      state.newMovies = action.payload;
    },
    getkids: (state, action) => {
      state.kids = action.payload;
    },
    getratedR: (state, action) => {
      state.ratedR = action.payload;
    },
    getdrama: (state, action) => {
      state.drama = action.payload;
    },
  },
});

export const {
  getPopular,
  gethighRate,
  getbestFrom,
  getnewMovies,
  getkids,
  getratedR,
  getdrama,
} = moviesSlice.actions;

export default moviesSlice.reducer;
