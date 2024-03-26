import React, { useState } from "react";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import UserError from "../../ui/UserError";
import { validateEmail, validatePassword } from "../../services/userValidation";

function Signup() {
  const [email, setEmail] = useState("testing@gmail.mail");
  const [password, setPassword] = useState("curiosity");
  const [repeatPassword, setRepeatPassword] = useState("curiosity");
  const [isLoading, setIsLoading] = useState(false); // Corrected initialization
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // Validate email
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long");
      return;
    }

    // Check if passwords match
    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    // Clear error if no validation issues
    setError("");

    // Set loading state
    setIsLoading(true);

    // Proceed with signup process
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }

  return (
    <div className="flex flex-col gap-8 sm:gap-20 items-center justify-center py-8 px-4 sm:py-20 relative">
      <img src="/assets/logo.svg" alt="" className="sm:w-20 w-16  top-0 " />

      <div className=" py-10 rounded-xl  bg-tertiary flex flex-col gap-10 px-2 sm:px-8 w-full sm:w-[30rem]">
        <h1 className="sm:text-[2rem] text-2xl text-secondary font-bold">
          Sign Up
        </h1>
        <form
          className="flex flex-col gap-8 justify-center"
          onSubmit={handleSubmit}
        >
          <div className="border-b-2 border-b-gray py-2">
            <input
              type="text"
              placeholder="Email address"
              className="w-full placeholder:pl-8 sm:placeholder:text-xl bg-tertiary text-secondary sm:pt-8 px-2 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="border-b-2 border-b-gray py-2">
            <input
              type="password"
              placeholder="Password"
              className="w-full placeholder:pl-8 sm:placeholder:text-xl bg-tertiary text-secondary  sm:pt-8 px-2 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="border-b-2 border-b-gray py-2">
            <input
              type="password"
              placeholder="Repeat Password"
              className="w-full placeholder:pl-8 sm:placeholder:text-xl bg-tertiary text-secondary  sm:pt-8 px-2 outline-none"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Creating your account..." : "Create an account"}
          </Button>
        </form>
        {error && <UserError>{error}</UserError>}
        <div className="text-center text-secondary flex flex-wrap text-xl justify-center">
          <span className="mr-4 text-lg sm:text-xl">
            Don't have an account?
          </span>
          <span>
            <Button to="/login">Login</Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
