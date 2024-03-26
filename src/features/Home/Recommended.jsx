import { useLoaderData } from "react-router-dom";
import RecommendedItems from "./RecommendedItems";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMoviesData, movies } from "./homeSlice";

function Recommended({ query }) {
  const menu = useLoaderData();

  const moviesList = useSelector(movies);
  const dispatch = useDispatch();
  const numMovies = moviesList.length;

  useEffect(() => {
    dispatch(getMoviesData(menu));
  }, [dispatch, menu]);

  return (
    <div className="">
      <h1 className="text-secondary text-[20px] my-8 sm:text-[32px]">
        {query.length === 0
          ? "Recommended for you"
          : `Found ${numMovies} results for '${query}'`}
      </h1>

      <div className="grid grid-cols phone:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {moviesList?.map((menuitem) => (
          <RecommendedItems menuitem={menuitem} key={menuitem.title} />
        ))}
      </div>
    </div>
  );
}

export default Recommended;
