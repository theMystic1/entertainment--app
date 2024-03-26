// Redux slice

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesList: [],
  entireMoviesArray: [], // Store entire movies array separately
};

const moviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    updateMovies(state, action) {
      state.moviesList = action.payload.filter(
        (movies) => movies.category === "Movie"
      );
      state.entireMoviesArray = action.payload; // Update entire movies array
    },
    searchMovies(state, action) {
      const searchTerm = action.payload.toLowerCase();
      state.moviesList = state.entireMoviesArray.filter(
        (movie) =>
          movie.title.toLowerCase().includes(searchTerm) &&
          movie.category === "Movie"
      );
    },
    resetMoviesList(state) {
      state.moviesList = state.entireMoviesArray; // Reset moviesList to entire movies array
    },
  },
});

export const { updateMovies, searchMovies, resetMoviesList } =
  moviesSlice.actions;

export default moviesSlice.reducer;
