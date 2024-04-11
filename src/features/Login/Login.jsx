import { useState } from "react";
import Button from "../../ui/Button";

import UserError from "../../ui/UserError";
import { useLogin } from "../authentication/useLogin";
import Spinner from "../../ui/Spinner";

function Login() {
  const { isPending: isLoading, login } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <div className="flex flex-col gap-8 sm:gap-20 items-center justify-center  px-4 py-20 ">
      <img src="/assets/logo.svg  " alt="" className="sm:w-20 w-10" />

      <div className=" py-10 rounded-xl  bg-tertiary flex flex-col gap-10 px-2 sm:px-8 w-full sm:w-[30rem]">
        <h1 className="sm:text-[2rem] text-2xl font-bold text-secondary ">
          Login
        </h1>
        <form
          className="flex flex-col gap-8 justify-center "
          onSubmit={handleSubmit}
        >
          <div className="border-b-2 border-b-gray py-4">
            <input
              type="text"
              placeholder="Email address"
              className="w-full placeholder:pl-8 sm:placeholder:text-xl bg-tertiary text-secondary  sm:pt-8 px-2 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="border-b-2 border-b-gray py-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full placeholder:pl-8 sm:placeholder:text-xl bg-tertiary text-secondary  sm:pt-8 px-2 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <Button>{isLoading ? <Spinner /> : "Login to your account"}</Button>
        </form>
        {error && <UserError>{error}</UserError>}
        <div className="text-center text-secondary flex flex-wrap text-xl justify-center">
          <span className="mr-4 text-lg sm:text-xl">
            Don't have an account?
          </span>
          <span>
            <Button to="/signup">Sign Up</Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
