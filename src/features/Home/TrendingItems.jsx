import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookmark, toggleBookmarks } from "./homeSlice";
import HoverPlay from "../../ui/HoverPlay";
// import { isBookOnBookmark } from "../Bookmarks/bookmarksSlice";

function TrendingItems({ movie }) {
  const bookmarks = useSelector(bookmark);
  const dispatch = useDispatch();

  const { title, isBookMarked, rating, thumbnail, year, category } = movie;

  const { regular } = thumbnail;

  function handleClick() {
    dispatch(toggleBookmarks(movie));
  }

  // const isBookmark = useSelector(isBookOnBookmark);

  return (
    <div
      className="bg-cover bg-center min-w-96 relative h-60  mr-8 group cursor-pointer"
      style={{
        backgroundImage: `url('${regular.small}')`,
      }}
    >
      <span
        className="bg-primary h-12 w-12 bg-opacity-85 rounded-full absolute right-4 top-4 flex items-center justify-center z-50"
        onClick={handleClick}
      >
        {isBookMarked ? (
          <img
            className="w-4 h-5"
            src="/assets/icon-bookmark-full.svg"
            alt=""
          />
        ) : (
          <img
            className="w-4 h-5"
            src="/assets/icon-bookmark-empty.svg"
            alt=""
          />
        )}
      </span>

      <span className="text-secondary bg-primary bg-opacity-20 p-4 w-full absolute bottom-0 left-4">
        <span className="flex items-center gap-4">
          <p className="text-base">{year} .</p>
          <img
            src="/assets/icon-nav-movies.svg"
            alt="movvies"
            className=""
          />{" "}
          <p className="text-base">{category}</p> . <p>{rating}</p>
        </span>

        <h1 className="font-bold text-xl mt-4">{title}</h1>
      </span>

      <HoverPlay />
    </div>
  );
}

export default TrendingItems;
