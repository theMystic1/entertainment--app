// Redux slice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  entireMoviesArray: [], // Store entire movies array separately
  parentArray: [], // Store
  bookmarks: [],
};

const homeSlice = createSlice({
  name: "allMovies",
  initialState,
  reducers: {
    getMoviesData(state, action) {
      state.movies = action.payload.map((movie) => {
        // Check if the current movie is present in the bookmarks array
        const localData = localStorage.getItem("bookmarks");
        const bookmarkedData = JSON.parse(localData);
        const isBookMarked = bookmarkedData?.some(
          (bookmark) => bookmark.title === movie.title
        );

        return {
          ...movie,
          isBookMarked: bookmarkedData ? isBookMarked : false, // Set isBookMarked based on whether the movie is in bookmarks
        };
      });

      state.entireMoviesArray = action.payload;

      localStorage.setItem("movies", JSON.stringify(state.movies));
    },
    searchHomeMovies(state, action) {
      const searchTerm = action.payload.toLowerCase();
      state.movies = state.entireMoviesArray.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm)
      );
    },
    resetHomeMoviesList(state) {
      state.movies = state.entireMoviesArray; // Reset moviesList to entire movies array
    },
    getAllMovies(state, action) {
      state.parentArray = action.payload;
    },

    toggleBookmarks(state, action) {
      const { title } = action.payload;
      const movie = state.movies.find((movie) => movie.title === title);
      if (movie) {
        movie.isBookMarked = !movie.isBookMarked;
        if (movie.isBookMarked) {
          state.bookmarks.push(movie);
        } else {
          state.bookmarks = state.bookmarks.filter(
            (bookmark) => bookmark.title !== title
          );
        }
      }
      localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
    },
  },
});

export const {
  searchHomeMovies,
  getMoviesData,
  resetHomeMoviesList,
  toggleBookmarks,
  getAllMovies,
} = homeSlice.actions;

export default homeSlice.reducer;

export const allTheMovies = (state) => state.allMovies.parentArray;

export const movies = (state) => state.allMovies.movies;
export const bookmark = (state) => state.allMovies.bookmarks;
