import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <Link to="/login" className="px-2">
        Login
      </Link>
      <Link to="/signup" className="px-2">
        Register
      </Link>
      <Link to="/profile" className="px-2">
        Profile
      </Link>
    </div>
  );
}
