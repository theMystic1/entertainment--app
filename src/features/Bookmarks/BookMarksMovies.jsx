import { searchMovies } from "../../services/searchMovies";
import { getMoviesCategory } from "../../services/supabase/getMoviesCategories";
import Loader from "../../ui/Loader";
import BookmarksMovieItem from "./BookmarksMoviesItem";
import { useBookmarks } from "./useBookmarks";

function BookMarksMovies({ query }) {
  const { isLoading, bookmarkedMovies = [] } = useBookmarks();
  const filteredBookmarks = getMoviesCategory(bookmarkedMovies, "movie");

  let bookmarkedMoviesOnly = filteredBookmarks;
  const searchedMovies = searchMovies(filteredBookmarks, query);

  if (query.length > 0) {
    bookmarkedMoviesOnly = [...searchedMovies];
  }

  if (isLoading) return <Loader />;
  return (
    <div className="">
      {bookmarkedMoviesOnly.length > 0 && (
        <h1 className="text-secondary  text-[20px] my-8 sm:text-[32px]">
          {query.length > 0
            ? `Found ${bookmarkedMoviesOnly.length} Bookmarked Movies For '${query} '`
            : "Bookmarked Movies"}
        </h1>
      )}

      <div className="grid grid-cols phone:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
        {bookmarkedMoviesOnly?.map((movie) => (
          <BookmarksMovieItem movie={movie} key={movie.title} />
        ))}
      </div>
    </div>
  );
}

export default BookMarksMovies;
