import BookMarksSeriesItem from "./BookMarksSeriesItem";
import { getMoviesCategory } from "../../services/supabase/getMoviesCategories";
import { useBookmarks } from "./useBookmarks";
import Loader from "../../ui/Loader";
import { searchMovies } from "../../services/searchMovies";

function BookmarksSeries({ query }) {
  const { isLoading, bookmarkedMovies } = useBookmarks();
  const filteredBookmarks = getMoviesCategory(bookmarkedMovies, "tv series");

  let bookmarkedSeries = filteredBookmarks;
  const searchedSeries = searchMovies(filteredBookmarks, query) || [];

  if (query.length > 0) {
    bookmarkedSeries = [...searchedSeries];
  }

  if (isLoading) return <Loader />;
  return (
    <div className="">
      {bookmarkedSeries.length > 0 && (
        <h1 className="text-secondary text-[20px] my-8 sm:text-[32px]">
          {query.length > 0
            ? `Found ${bookmarkedSeries.length} Bookmarked series For '${query}' `
            : "Bookmarked TV Series"}
        </h1>
      )}

      <div className="grid grid-cols phone:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
        {bookmarkedSeries?.map((series) => (
          <BookMarksSeriesItem series={series} key={series.title} />
        ))}
      </div>
    </div>
  );
}

export default BookmarksSeries;
