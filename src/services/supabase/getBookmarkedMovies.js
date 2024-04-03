import supabase from "./supabase";

export async function editBookmarkedMovies() {
  const { data, error } = await supabase.from("movies").select("isbookmarked");

  if (error) {
    console.error(error);

    throw new Error("Movies could not be fetched");
  }
  return { data };
}

export function getBookmarkedMovies(movies) {
  const bookmarkedMovies = movies?.filter(
    (movie) => movie.isbookmarked === true
  );

  return bookmarkedMovies;
}

// function filterBookmarkedMovies() {}
