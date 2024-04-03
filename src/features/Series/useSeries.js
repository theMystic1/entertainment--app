import { getMoviesCategory } from "../../services/supabase/getMoviesCategories";
import { useMovies } from "../Home/useMovies";

export function useSeries() {
  const { isLoading, movies } = useMovies();

  const series = getMoviesCategory(movies, "TV Series");

  return { isLoading, series };
}
