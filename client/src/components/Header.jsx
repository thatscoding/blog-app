import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

function Header() {
  const { username } = useUser();
  return (
    <header className="shadow-xl mb-6">
      <div className=" container xl:max-w-6xl mx-auto">
        <div className="flex justify-between items-center h-[10vh] px-4">
          <Link
            className="text-3xl font-bold cursor-pointer text-blue-500 hover:text-blue-700 duration-700 ease-in-out"
            to="/"
          >
            MyBlog
          </Link>
          <nav className="flex gap-x-6 sm:gap-x-8 font-bold text-xl">
            <Link
              to="/login"
              className="hover:text-blue-500 duration-700 ease-in-out"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="hover:text-blue-500 duration-700 ease-in-out"
            >
              Register
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
