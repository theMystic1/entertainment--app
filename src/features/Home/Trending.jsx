import TrendingItems from "./TrendingItems";
import { useMovies } from "./useMovies";

function Trending() {
  const { movies } = useMovies();
  const trendingMovies = movies?.filter((movies) => movies.istrending === true);

  return (
    <div className="">
      <h1 className="text-secondary text-[20px] my-8 sm:text-[32px]">
        Trending
      </h1>
      <div className="overflow-x-auto mx-auto ">
        <div className="flex justify-between">
          {trendingMovies?.map((movie) => (
            <TrendingItems movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trending;
