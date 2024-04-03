// import { getMovies } from "../../services/apiMovies";
import MoviesItem from "./MoviesItem";

import { useOnlyMovies } from "./useOnlyMovies";
import Loader from "../../ui/Loader";
import Form from "../../ui/Form";
import { useState } from "react";
import { searchMovies } from "../../services/searchMovies";

function Movies() {
  const { isLoading, moviesMovies = [] } = useOnlyMovies();
  const [query, setQuery] = useState("");

  let moviesList = [...moviesMovies];

  const searchedMovies = searchMovies(moviesMovies, query);
  if (query.length > 0) {
    moviesList = [...searchedMovies];
  }

  if (isLoading) return <Loader />;

  return (
    <>
      <div className="">
        <Form
          placeholder="Search for movies "
          query={query}
          setQuery={setQuery}
        />
        <h1 className="text-secondary my-8 text-[32px]">
          {query?.length > 0
            ? `Found ${moviesList.length} results for '${query}`
            : "Movies"}{" "}
        </h1>

        <div className="grid grid-cols phone:grid-cols-2  lg:grid-cols-3 3xl:grid-cols-4">
          {moviesList?.map((movie) => (
            <MoviesItem movie={movie} key={movie.title} />
          ))}
        </div>
      </div>
    </>
  );
}

// export async function loader() {
//   const movies = await getMovies();
//   return movies;
// }

export default Movies;
