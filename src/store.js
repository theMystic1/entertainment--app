import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/Movies/moviesSlice";
import homeReducer from "./features/Home/homeSlice";
import seriesReducer from "./features/Series/seriesSlice";
import bookmarksReducer from "./features/Bookmarks/bookmarksSlice";
import userReducer from "./features/Signup/userSlice";

const store = configureStore({
  reducer: {
    movie: moviesReducer,
    allMovies: homeReducer,
    series: seriesReducer,
    bookmarks: bookmarksReducer,
    user: userReducer,
  },
});

export default store;
