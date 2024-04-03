import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../services/supabase/apiMovies";

export function useMovies() {
  const { isLoading, data: movies } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  return { isLoading, movies };
}
