import { useDispatch, useSelector } from "react-redux";
import { bookmark, toggleBookmarks } from "../Home/homeSlice";
import HoverPlay from "../../ui/HoverPlay";

function BookMarksSeriesItem({ series }) {
  const bookmarkedMovies = useSelector(bookmark);

  const dispatch = useDispatch();
  const { title, rating, thumbnail, year, category } = series;

  const isBookMarked = bookmarkedMovies.some(
    (bookmark) => bookmark.title === series.title
  );

  function handleClick() {
    dispatch(toggleBookmarks({ title: series.title }));
  }

  const { regular } = thumbnail;
  return (
    <div className="relative p-2 text-secondary">
      <div
        className="bg-cover bg-center h-[160px]  gap-8 inset-0 bg-gradient-to-r from-black to-transparent rounded-md relative cursor-pointer  group p-2"
        style={{
          backgroundImage: `url('${regular.small}')`,
        }}
      >
        <span
          className="bg-primary h-12 w-12 bg-opacity-80 rounded-full absolute right-4 flex items-center justify-center z-50"
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

        <HoverPlay />
      </div>

      <div className="mt-4 mb-8">
        <span className="flex items-center gap-2 text-stone-200 ">
          <p>{year} .</p>
          <img
            src="/assets/icon-nav-movies.svg"
            alt="movvies"
            className=""
          />{" "}
          <p>{category}</p> . <p>{rating}</p>
        </span>

        <h1 className="font-bold text-xl">{title}</h1>
      </div>
    </div>
  );
}

export default BookMarksSeriesItem;
