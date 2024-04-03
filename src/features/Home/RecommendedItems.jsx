import HoverPlay from "../../ui/HoverPlay";
import Spinner from "../../ui/Spinner";
import { useUpdateBookmarks } from "../../ui/useUpdateBookmarks";
import { getMessage } from "../../ui/bookmarksMessage";

function RecommendedItems({ movie }) {
  const { title, isbookmarked, id, rating, thumbnail, year, category } = movie;
  const message = getMessage(title, isbookmarked);
  const { isBookmarking, mutate } = useUpdateBookmarks(message);

  const { regular } = thumbnail;

  return (
    <div className="relative p-2 text-secondary">
      <div
        className="bg-cover bg-center h-[160px]  gap-8 inset-0 bg-gradient-to-r from-black to-transparent rounded-md  relative p-2 cursor-pointer group transition-all duration-700"
        style={{
          backgroundImage: `url('${regular.small}')`,
        }}
      >
        <span
          className="bg-primary h-12 w-12 bg-opacity-80 rounded-full absolute right-4 flex items-center justify-center transition duration-500 z-50"
          onClick={() => mutate(id)}
        >
          {isBookmarking ? (
            <Spinner /> // Display spinner if bookmarking is in progress
          ) : // Display bookmark icon based on the value of isbookmarked
          isbookmarked ? (
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

export default RecommendedItems;
