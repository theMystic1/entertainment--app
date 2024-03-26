import { getMovies } from "../../services/apiMovies";
import MoviesItem from "./MoviesItem";
import MoviesForm from "./MoviesForm";
import { useDispatch, useSelector } from "react-redux";
import { updateMovies } from "./moviesSlice";
import { useEffect, useState } from "react";
import { isAuthenticated } from "../Signup/userSlice";
import { useNavigate, useParams } from "react-router-dom";

function Movies() {
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

  const dispatch = useDispatch();

  useEffect(() => {
    // Check if movies exist in localStorage
    const storedMovies = JSON.parse(localStorage.getItem("movies"));

    if (storedMovies) {
      dispatch(updateMovies(storedMovies));
    }
  }, [dispatch]);
  const moviesLists = useSelector((state) => state.movie.moviesList);
  const moviesLength = moviesLists.length;

  return (
    <>
      <div className="">
        <MoviesForm query={query} setQuery={setQuery} />
        <h1 className="text-secondary my-8 text-[32px]">
          {query.length > 0
            ? `Found ${moviesLength} results for '${query}`
            : "Movies"}{" "}
        </h1>

        <div className="grid grid-cols phone:grid-cols-2  lg:grid-cols-3 3xl:grid-cols-4">
          {moviesLists?.map((movie) => (
            <MoviesItem movie={movie} key={movie.title} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function loader() {
  const movies = await getMovies();
  return movies;
}

export default Movies;
