import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import ProtectedRoutes from "./ui/ProtectedRoutes";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      {/* <RouterProvider router={router} />; */}
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route
            element={
              <ProtectedRoutes>
                <AppLayout />
              </ProtectedRoutes>
            }
          >
            <Route index element={<Navigate replace to="/home" />} />

            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/tvseries" element={<TvSeries />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-right"
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
