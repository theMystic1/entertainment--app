import { useLoaderData } from "react-router-dom";
import BookmarksMovieItem from "./BookmarksMoviesItem";
import { useDispatch, useSelector } from "react-redux";
import { updateBookmarkedMovies } from "./bookmarksSlice";
import { useEffect } from "react";
import { bookmark } from "../Home/homeSlice";

function BookMarksMovies({ query }) {
  const allMovies = useLoaderData();
  const bookmarkedMovies = useSelector(bookmark);
  const bookmarksMovies = useSelector(
    (state) => state.bookmarks.bookmarkedMovies
  );
  const numMovies = bookmarksMovies.length;
  const dispatch = useDispatch();
  // console.log(bookmarksMovies);

  useEffect(
    function () {
      const storedMovies = JSON.parse(localStorage.getItem("movies"));
      console.log();

      if (storedMovies) {
        dispatch(updateBookmarkedMovies(bookmarkedMovies));
      }
    },
    [dispatch, bookmarkedMovies]
  );

  if (!numMovies) return null;
  return (
    <div className="">
      <h1 className="text-secondary  text-[20px] my-8 sm:text-[32px]">
        {query.length > 0
          ? `Found ${numMovies} Bookmarked Movies For '${query} '`
          : "Bookmarked Movies"}
      </h1>

      <div className="grid grid-cols phone:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
        {bookmarksMovies.map((movie) => (
          <BookmarksMovieItem movie={movie} key={movie.title} />
        ))}
      </div>
    </div>
  );
}

export default BookMarksMovies;
