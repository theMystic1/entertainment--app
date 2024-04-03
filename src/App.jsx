import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./features/Home/Home";
import Signup from "./features/Signup/Signup";
import Login from "./features/Login/Login";
import Movies from "./features/Movies/Movies";
import Bookmarks from "./features/Bookmarks/Bookmarks";
import TvSeries from "./features/Series/TvSeries";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

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
          // loader: menuLoader,
        },

        {
          path: "/movies",
          element: <Movies />,
          // loader: moviesLoader,
        },
        {
          path: "/bookmarks",
          element: <Bookmarks />,
          // loader: bookmarksLoader,
        },
        {
          path: "/tvseries",
          element: <TvSeries />,
          // loader: seriesLoader,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <RouterProvider router={router} />;
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#161d2f",
            color: "#ffff",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
