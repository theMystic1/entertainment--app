import { useLoaderData, useNavigate } from "react-router-dom";
import { getMovies } from "../../services/apiMovies";
import TvseriesItem from "./TvseriesItem";
import SeriesForm from "./SeriesForm";
import { useDispatch, useSelector } from "react-redux";
import { updateSeries } from "./seriesSlice";
import { useEffect, useState } from "react";
import { isAuthenticated } from "../Signup/userSlice";

function TvSeries() {
  const [query, setQuery] = useState("");
  const [redirected, setRedirected] = useState(false); // Track if redirection has occurred
  const navigate = useNavigate();

  const isAuth = useSelector(isAuthenticated);

  useEffect(() => {
    // Check if user is not authenticated and redirection has not occurred yet
    if (!isAuth && !redirected) {
      navigate("/login");
      setRedirected(true); // Mark redirection as occurred
    }
  }, [isAuth, navigate, redirected]);

  const allMovies = useLoaderData();

  const series = useSelector((state) => state.series.series);
  const dispatch = useDispatch();

  // Retrieve persisted data from Redux store

  useEffect(() => {
    // Check if movies exist in localStorage
    const storedMovies = JSON.parse(localStorage.getItem("movies"));

    if (storedMovies) {
      dispatch(updateSeries(storedMovies));
    }
  }, [dispatch]);

  const seriesLength = series.length;

  return (
    <div className="">
      <SeriesForm setQuery={setQuery} query={query} />
      <h1 className="text-secondary text-[20px] my-8 sm:text-[32px]">
        {" "}
        {query.length > 0
          ? `Found ${seriesLength} rsults for '${query}'`
          : "TV Series"}{" "}
      </h1>

      <div className="grid grid-cols phone:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
        {series.map((movie) => (
          <TvseriesItem movie={movie} key={movie.title} />
        ))}
      </div>
    </div>
  );
}

export async function loader() {
  const movies = await getMovies();
  return movies;
}

export default TvSeries;
