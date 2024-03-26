import { getMovies } from "../../services/apiMovies";
import BookMarksMovies from "./BookMarksMovies";
import BookmarksSeries from "./BookmarksSeries";
import BookmarksForm from "./BookmarksForm";
import { useEffect, useState } from "react";
import { isAuthenticated } from "../Signup/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Bookmarks() {
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
    <div>
      <BookmarksForm setQuery={setQuery} query={query} />
      <BookMarksMovies query={query} />
      <BookmarksSeries query={query} />
    </div>
  );
}

export async function loader() {
  const movies = await getMovies();
  return movies;
}

export default Bookmarks;
