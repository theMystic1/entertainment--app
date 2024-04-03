import BookMarksMovies from "./BookMarksMovies";
import BookmarksSeries from "./BookmarksSeries";

import Form from "../../ui/Form";
import { useState } from "react";

function Bookmarks() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <Form
        placeholder="Search for bookmarked shows"
        setQuery={setQuery}
        query={query}
      />
      <BookMarksMovies query={query} />
      <BookmarksSeries query={query} />
    </div>
  );
}

export default Bookmarks;
