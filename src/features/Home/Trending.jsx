import { useSelector } from "react-redux";
import TrendingItems from "./TrendingItems";
import { movies } from "./homeSlice";

function Trending() {
  const moviesList = useSelector(movies);

  const trendingMovies = moviesList.filter(
    (movies) => movies.isTrending === true
  );

  return (
    <div className="">
      <h1 className="text-secondary text-[20px] my-8 sm:text-[32px]">
        Trending
      </h1>
      <div className="overflow-x-auto mx-auto ">
        <div className="flex justify-between">
          {trendingMovies.map((movie) => (
            <TrendingItems movie={movie} key={movie.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trending;
