import Recommended from "./Recommended";
import Trending from "./Trending";
import Form from "../../ui/Form";

import Loader from "../../ui/Loader";
import { useMovies } from "./useMovies";
import { useState } from "react";

function Home() {
  const [query, setQuery] = useState("");

  const { isLoading } = useMovies();
  if (isLoading) return <Loader />;
  return (
    <div className="">
      <Form
        placeholder="Search for movies or TV series"
        setQuery={setQuery}
        query={query}
      />
      <div className="z-50  max-w-screen-2xl">
        {query === "" && <Trending />}
      </div>
      <Recommended setQuery={setQuery} query={query} />
    </div>
  );
}

export default Home;
