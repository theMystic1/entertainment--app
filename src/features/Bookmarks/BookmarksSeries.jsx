import { useLoaderData } from "react-router-dom";
import BookMarksSeriesItem from "./BookMarksSeriesItem";
import { useDispatch, useSelector } from "react-redux";
import { updateBookmarkedSeries } from "./bookmarksSlice";
import { useEffect } from "react";
import { bookmark } from "../Home/homeSlice";

function BookmarksSeries({ query }) {
  const allMovies = useLoaderData();

  const dispatch = useDispatch();
  const bookmarkedSeries = useSelector(bookmark);
  const bookmarksSeries = useSelector(
    (state) => state.bookmarks.bookmarkedSeries
  );

  const bookmarkedNum = bookmarksSeries.length;

  useEffect(
    function () {
      const storedMovies = JSON.parse(localStorage.getItem("movies"));

      if (storedMovies) {
        dispatch(updateBookmarkedSeries(bookmarkedSeries));
      }
    },
    [dispatch, bookmarkedSeries]
  );

  if (!bookmarkedNum) return null;
  return (
    <div className="">
      <h1 className="text-secondary text-[20px] my-8 sm:text-[32px]">
        {query.length > 0
          ? `Found ${bookmarkedNum} Bookmarked series For '${query}' `
          : "Bookmarked TV Series"}
      </h1>

      <div className="grid grid-cols phone:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
        {bookmarksSeries.map((series) => (
          <BookMarksSeriesItem series={series} key={series.title} />
        ))}
      </div>
    </div>
  );
}

export default BookmarksSeries;
