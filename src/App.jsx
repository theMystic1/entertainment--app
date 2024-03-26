import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home, { loader as menuLoader } from "./features/Home/Home";
import Signup from "./features/Signup/Signup";
import Login from "./features/Login/Login";
import Movies, { loader as moviesLoader } from "./features/Movies/Movies";
import Bookmarks, {
  loader as bookmarksLoader,
} from "./features/Bookmarks/Bookmarks";
import TvSeries, { loader as seriesLoader } from "./features/Series/TvSeries";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },

    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: menuLoader,
        },

        {
          path: "/movies",
          element: <Movies />,
          loader: moviesLoader,
        },
        {
          path: "/bookmarks",
          element: <Bookmarks />,
          loader: bookmarksLoader,
        },
        {
          path: "/tvseries",
          element: <TvSeries />,
          loader: seriesLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
