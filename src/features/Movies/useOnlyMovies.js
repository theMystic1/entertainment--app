import { getMoviesCategory } from "../../services/supabase/getMoviesCategories";
import { useMovies } from "../Home/useMovies";

export function useOnlyMovies() {
  const { isLoading, movies } = useMovies();

  const moviesMovies = getMoviesCategory(movies, "Movie");

  return { isLoading, moviesMovies };
}
