import { faEdge } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from "firebase";
import "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { userInfo } from "../App";
import initializeFirebase from "./../lib/initializeFirebase";

export default function EmailSignIn() {
  const [user, setUser] = useContext(userInfo);
  initializeFirebase();
  // Title
  document.title = "🔥 SignIn";

  // Form handling
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

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
            <span className="text-sm text-gray-800">
              This field is required <FontAwesomeIcon icon={faEdge} />
            </span>
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
