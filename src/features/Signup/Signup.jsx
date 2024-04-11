import React, { useState } from "react";
import Button from "../../ui/Button";
import UserError from "../../ui/UserError";
import { useForm } from "react-hook-form";
import { useSignUp } from "../authentication/useSignUp";
import Spinner from "../../ui/Spinner";
// import { validateEmail, validatePassword } from "../../services/userValidation";

function Signup() {
  const { isPending: isLoading, signup } = useSignUp();
  const { register, handleSubmit, formState, reset, getValues } = useForm();
  // /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function onSubmit({ email, password }) {
    signup(
      { email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  const { errors: error } = formState;

  return (
    <div className="flex flex-col gap-8 sm:gap-20 items-center justify-center py-8 px-4 sm:py-20 relative">
      <img src="/assets/logo.svg" alt="" className="sm:w-20 w-16  top-0 " />

      <div className=" py-10 rounded-xl  bg-tertiary flex flex-col gap-10 px-2 sm:px-8 w-full sm:w-[30rem]">
        <h1 className="sm:text-[2rem] text-2xl text-secondary font-bold">
          Sign Up
        </h1>
        <form
          className="flex flex-col gap-8 justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="border-b-2 border-b-gray py-2 relative">
            <input
              type="text"
              placeholder="Email address"
              className="w-full placeholder:pl-8 sm:placeholder:text-xl bg-tertiary text-secondary sm:pt-8 px-2 outline-none"
              id="email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
              disabled={isLoading}
            />
            <UserError>{error?.email?.message}</UserError>
          </div>

          <div className="border-b-2 border-b-gray py-2 relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full placeholder:pl-8 sm:placeholder:text-xl bg-tertiary text-secondary  sm:pt-8 px-2 outline-none"
              id="password"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password needs a minimum of 8 characters",
                },
              })}
              disabled={isLoading}
            />

            <UserError>{error?.password?.message}</UserError>
          </div>
          <div className="border-b-2 border-b-gray py-2 relative">
            <input
              type="password"
              placeholder="Repeat Password"
              className="w-full placeholder:pl-8 sm:placeholder:text-xl bg-tertiary text-secondary  sm:pt-8 px-2 outline-none"
              id="repeatPassword"
              {...register("repeatPassword", {
                required: "This field is required",
                validate: (value) =>
                  value === getValues().password || "passwords need to match",
              })}
              disabled={isLoading}
            />

            <UserError>{error?.repeatPassword?.message}</UserError>
          </div>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? <Spinner /> : "Create an account"}
          </Button>
        </form>
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
