import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { resetHomeMoviesList, searchHomeMovies } from "./homeSlice";

function Form({ query, setQuery }) {
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (query === "") dispatch(resetHomeMoviesList());

      dispatch(searchHomeMovies(query));
    },
    [dispatch, query]
  );
  return (
    <form className="relative w-full md: xl:w-[60rem] sm:px-0 px-2 py-6  h-20">
      <span className="relative w-full flex items-center gap-2 ">
        <img
          src="/assets/icon-search.svg
        "
          alt="search-icon"
          className=" z-30 "
        />
        <input
          type="text"
          placeholder="Search for movies or TV series"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className=" bg-primary placeholder:text-xl placeholder:pl-2  w-full py-3  outline-0 text-base placeholder:text-stone-500 text-secondary  caret-accent"
        />
      </span>
    </form>
  );
}

export default Form;
