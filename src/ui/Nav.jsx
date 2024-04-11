import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLogout } from "../features/authentication/useLogout";
import Spinner from "./Spinner";

function Nav({ isopen, handleImgOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const curPath = location.pathname.split("/")[1];

  const { isPending: isLoading, logout } = useLogout();
  function handleLogout() {
    logout();
  }

  return (
    <nav className="w-full h-20 bg-tertiary flex justify-between items-center px-4 asolute top-0 xl:hidden z-50">
      <Link to="/" className="">
        <img src="/assets/logo.svg" alt="logo" className="" />
      </Link>

      <span className="flex items-center justify-between gap-6 sm:gap-10">
        <NavItem to="/" imgSrc="icon-nav-home" isActive={!curPath}>
          Home
        </NavItem>

        <NavItem
          to="/movies"
          imgSrc="icon-nav-movies"
          isActive={curPath === "movies"}
          onClick={handleImgOpen}
        >
          Movies
        </NavItem>

        <NavItem
          to="/tvseries"
          imgSrc="icon-nav-tv-series"
          isActive={curPath === "tvseries"}
        >
          TV Series
        </NavItem>

        <NavItem
          to="/bookmarks"
          imgSrc="icon-nav-bookmark"
          isActive={curPath === "bookmarks"}
        >
          Bookmarks
        </NavItem>
      </span>

      {isLoading ? (
        <Spinner />
      ) : (
        <span className="relative">
          <img
            src="/assets/image-avatar.png"
            alt="profile-img"
            className="w-8 ring-offset-white "
            onClick={handleImgOpen}
          />

          <button
            className={`${
              isopen ? "block" : "hidden"
            } absolute z-50 bg-primary h-10 px-4 py-2 flex items-center justify-center text-secondary right-[-10px] bottom-[-40px] rounded-sm cursor-pointer `}
            onClick={handleLogout}
          >
            Logout
          </button>
        </span>
      )}
    </nav>
  );
}

function NavItem({ to, imgSrc, isActive, onClick, children }) {
  return (
    <Link to={to} className="group" onClick={onClick}>
      <img
        src={`/assets/${imgSrc}${isActive ? "-active" : ""}.svg`}
        alt={children}
        className={`group-hover:scale-150 transition-all duration-500 ${
          isActive ? "w-5" : ""
        }`}
      />
    </Link>
  );
}

export default Nav;
