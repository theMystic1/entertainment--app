import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBookmark } from "../services/supabase/apiMovies";
import toast from "react-hot-toast";

export function useUpdateBookmarks(successMessage='') {
  const queryClient = useQueryClient();
  const { isPending: isBookmarking, mutate } = useMutation({
    mutationFn: updateBookmark,
    onSuccess: () => {
      toast.success(successMessage);
      queryClient.invalidateQueries({
        queryKey: ["movies"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    isBookmarking,
    mutate,
  };
}
