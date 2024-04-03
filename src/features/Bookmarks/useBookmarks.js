import { getBookmarkedMovies } from "../../services/supabase/getBookmarkedMovies";
import { useMovies } from "../Home/useMovies";

export function useBookmarks() {
  const { isLoading, movies } = useMovies();

  const bookmarkedMovies = getBookmarkedMovies(movies);

  return { isLoading, bookmarkedMovies };
}
