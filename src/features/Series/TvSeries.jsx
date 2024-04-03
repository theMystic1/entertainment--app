import { useState } from "react";
import { searchMovies } from "../../services/searchMovies";
import Form from "../../ui/Form";
import Loader from "../../ui/Loader";
import TvseriesItem from "./TvseriesItem";
import { useSeries } from "./useSeries";

function TvSeries() {
  const [query, setQuery] = useState("");
  const { isLoading, series = [] } = useSeries();
  let seriesList = [...series];

  const searchedMovies = searchMovies(series, query);
  if (query.length > 0) {
    seriesList = [...searchedMovies];
  }
  if (isLoading) return <Loader />;
  return (
    <div className="">
      <Form
        placeholder="Search your favorite TV Series"
        setQuery={setQuery}
        query={query}
      />
      <h1 className="text-secondary text-[20px] my-8 sm:text-[32px]">
        {" "}
        {query.length > 0
          ? `Found ${seriesList.length} rsults for '${query}'`
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

export default TvSeries;
