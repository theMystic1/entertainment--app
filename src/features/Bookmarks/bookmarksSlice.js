import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarkedMovies: [],
  bookmarkedSeries: [],
  allBookmarks: [],
  isBookmark: false,
};

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    updateBookmarkedMovies(state, action) {
      state.bookmarkedMovies = action.payload.filter(
        (movie) => movie.category === "Movie"
      );

      state.allBookmarks = action.payload;
    },

    updateBookmarkedSeries(state, action) {
      state.bookmarkedSeries = action.payload.filter(
        (movie) => movie.category === "TV Series"
      );

      state.allBookmarks = action.payload;
    },
    searchBookmark(state, action) {
      const { query } = action.payload;
      state.bookmarkedMovies = state.allBookmarks.filter(
        (bookmark) =>
          bookmark.category === "Movie" &&
          bookmark.title.toLowerCase().includes(query.toLowerCase())
      );

      state.bookmarkedSeries = state.allBookmarks.filter(
        (bookmark) =>
          bookmark.category === "TV Series" &&
          bookmark.title.toLowerCase().includes(query.toLowerCase())
      );
    },

    setBookmarks(state, action) {},
  },
});

export const {
  updateBookmarkedMovies,
  updateBookmarkedSeries,
  searchBookmark,
  setBookmarks,
} = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
