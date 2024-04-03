import { useState } from "react";

export function useSearchQuery() {
  const [query, setQuery] = useState("");

  return { query, setQuery };
}
