import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  series: [],
  entireMoviesArray: [],
};

const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {
    updateSeries(state, action) {
      state.series = action.payload.filter(
        (movies) => movies.category === "TV Series"
      );
      state.entireMoviesArray = action.payload; // Update entire movies array
    },
    searchSeries(state, action) {
      const searchTerm = action.payload.toLowerCase();
      state.series = state.entireMoviesArray.filter(
        (movie) =>
          movie.title.toLowerCase().includes(searchTerm) &&
          movie.category === "TV Series"
      );
    },
    resetSeriesList(state) {
      state.series = state.entireMoviesArray; // Reset moviesList to entire movies array
    },
  },
});

export const { updateSeries, searchSeries, resetSeriesList } =
  seriesSlice.actions;

export default seriesSlice.reducer;
