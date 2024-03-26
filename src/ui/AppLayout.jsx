import { Outlet, useNavigation } from "react-router-dom";
import Nav from "./Nav";
// import Form from "../features/Home/Form";
import RightNav from "./RightNav";
import Loader from "./Loader";
import { useState } from "react";

function AppLayout() {
  const navigation = useNavigation();
  const [isopen, setIsOpen] = useState(false);

  function handleImgOpen() {
    setIsOpen((iso) => !iso);
  }
  const isLoading = navigation.state === "loading";

  return (
    <div className="bg-primary h-full  relative z-40">
      {isLoading && <Loader />}
      <header className=" ">
        <Nav isopen={isopen} handleImgOpen={handleImgOpen} />
      </header>

      <main className="relative top-20 h-full xl:grid xl:grid-cols-[80px,1fr] xl:gap-4 px-4 z-40">
        <RightNav isopen={isopen} handleImgOpen={handleImgOpen} />
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
