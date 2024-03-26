import Recommended from "./Recommended";
import Trending from "./Trending";
import Form from "./Form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../Signup/userSlice";
import { getMovies } from "../../services/apiMovies";

function Home() {
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

  return (
    <div className="">
      <Form query={query} setQuery={setQuery} />
      <div className="z-50  max-w-screen-2xl">
        {query === "" && <Trending />}
      </div>
      <Recommended query={query} />
    </div>
  );
}

export async function loader() {
  const movies = await getMovies();
  return movies;
}

export default Home;
