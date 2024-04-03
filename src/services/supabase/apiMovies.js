import supabase from "./supabase";

export async function getMovies() {
  const { data: movies, error } = await supabase.from("movies").select("*");

  if (error) {
    console.error(error);
    throw new Error("Movies could not be loaded");
  }

  return movies;
}

export async function updateBookmark(id) {
  const { data: movie, error } = await supabase
    .from("movies")
    .select("isbookmarked")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Error fetching movie");
  }

  const updatedIsBookmarked = !movie.isbookmarked;

  const { data: updatedMovie, error: updateError } = await supabase
    .from("movies")
    .update({ isbookmarked: updatedIsBookmarked })
    .eq("id", id)
    .single();

  if (updateError) {
    console.error(updateError);
    throw new Error("Error updating bookmark");
  }

  return updatedMovie;
}
