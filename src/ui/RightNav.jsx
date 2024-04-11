import { Link, useLocation } from "react-router-dom";
import { useLogout } from "../features/authentication/useLogout";
import Spinner from "./Spinner";

const iconPaths = {
  "/": {
    active: "/assets/icon-nav-home-active.svg",
    inactive: "/assets/icon-nav-home.svg",
  },
  "/movies": {
    active: "/assets/icon-nav-movies-active.svg",
    inactive: "/assets/icon-nav-movies.svg",
  },
  "/tvseries": {
    active: "/assets/icon-nav-tv-series-active.svg",
    inactive: "/assets/icon-nav-tv-series.svg",
  },
  "/bookmarks": {
    active: "/assets/icon-bookmark-full.svg",
    inactive: "/assets/icon-nav-bookmark.svg",
  },
};

function RightNav({ isopen, handleImgOpen }) {
  const location = useLocation();
  const curPath = location.pathname;

  const { isPending: isLoading, logout } = useLogout();

  return (
    <nav className="w-20 h-[60rem] bg-tertiary hidden gap-20 items-center px-4 flex-col relative top-8 xl:flex left-0 rounded-lg py-8 z-40">
      <Link to="/" className="group">
        <img
          src="/assets/logo.svg"
          alt="logo"
          className="group-hover:scale-150 transition-all duration-500"
        />
      </Link>

      <span className="flex items-center flex-col justify-between gap-6 sm:gap-10">
        {Object.entries(iconPaths).map(([path, icons]) => (
          <Link to={path} key={path} className="group">
            <img
              src={curPath === path ? icons.active : icons.inactive}
              alt="movvies"
              className="group-hover:scale-150 transition-all duration-500"
            />
          </Link>
        ))}
      </span>

      <span className="absolute bottom-8" onClick={handleImgOpen}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <img
              src="/assets/image-avatar.png"
              alt="profile-img"
              className="w-8 ring-offset-white cursor-pointer"
            />
            <button
              className={`${
                isopen ? "block" : "hidden"
              }  z-50 bg-primary h-10 px-4 py-2 flex items-center justify-center text-secondary rounded-sm absolute left-[-20px] cursor-pointer`}
              onClick={logout}
            >
              Logout
            </button>
          </>
        )}
      </span>
    </nav>
  );
}

export default RightNav;
