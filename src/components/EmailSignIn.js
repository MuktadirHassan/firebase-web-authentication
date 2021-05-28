import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function EmailSignIn() {
  // Title
  document.title = "🔥 SignIn";

  // Form handling
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("email"));
  return (
    <div className="max-w-sm p-6 mx-auto rounded shadow-lg">
      <h1 className="mb-4 text-3xl">Login Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6 pb-4 text-gray-700">
          <input
            placeholder="Email"
            {...register("email", { required: true })}
            className="px-2 py-4 rounded focus:outline-none focus:ring focus:ring-gray-300 "
          />
          {errors.email && (
            <span className="text-gray-900">This field is required</span>
          )}
          <input
            {...register("password", { required: true, minLength: 6 })}
            placeholder="Password"
            className="px-2 py-4 rounded focus:outline-none focus:ring focus:ring-gray-300 "
          />

          {errors.password?.type === "required" && (
            <span className="text-gray-900">This field is required</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="text-gray-900">
              Password should be more than 6 characters
            </span>
          )}

          <input
            type="submit"
            className="p-2 text-white bg-gray-800 rounded focus:outline-none focus:ring focus:ring-gray-300"
          />
        </div>
      </form>
      <Link to="/signup" className="text-gray-700 hover:underline">
        Don't have an account? Register
      </Link>
    </div>
  );
}
