export function getMoviesCategory(movies, category) {
  const data = movies?.filter(
    (movie) => movie.category.toLowerCase() === category.toLowerCase()
  );

  return data;
}
