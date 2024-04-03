import { searchMovies } from "../../services/searchMovies";
import RecommendedItems from "./RecommendedItems";

import { useMovies } from "./useMovies";

function Recommended({ query }) {
  const { movies = [] } = useMovies();

  let moviesList = [...movies];

  const searchedMovies = searchMovies(movies, query);
  if (query.length > 0) {
    moviesList = [...searchedMovies];
  }

  return (
    <div className="">
      <h1 className="text-secondary text-[20px] my-8 sm:text-[32px]">
        {query.length === 0
          ? "Recommended for you"
          : `Found ${searchedMovies.length} results for '${query}'`}
      </h1>

      <div className="grid grid-cols phone:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {moviesList?.map((movie) => (
          <RecommendedItems movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Recommended;
