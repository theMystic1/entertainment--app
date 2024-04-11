import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
// import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
// import Loader from "./Loader";

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  // load auth user
  const { isLoading, isAuthenticated } = useUser();

  // if no user redirect to login

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate("/login");
      }
    },
    [isAuthenticated, isLoading, navigate]
  );
  // show  spinner
  // if (isLoading) return <Loader />;

  // render app
  if (isAuthenticated)
    return <main className="h-screen w-screen ">{children}</main>;
}

export default ProtectedRoutes;
