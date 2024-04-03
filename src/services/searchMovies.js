export function searchMovies(movies, query) {
  if (!query) return;
  const moviesData = movies?.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return moviesData;
}
