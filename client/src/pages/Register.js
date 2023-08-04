import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

const initialUser = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Register() {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerUser(user);
    const data = res.data;
    console.log(data);
    setUser(initialUser);
    if (data.status === "success") {
      navigate("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center py-8">Register</h1>
      <div className="w-full h-full flex justify-center">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="border shadow-xl rounded-xl h-96 w-full sm:w-2/3 md:w-1/2 flex flex-col gap-y-4 pt-12 px-4 mx-4 sm:mx-0 "
        >
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username"
            className="border-2 rounded-xl p-2"
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            className="border-2 rounded-xl p-2"
          />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
            className="border-2 rounded-xl p-2"
          />

          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="border-2 rounded-xl p-2"
          />
          <button className="border-2 rounded-xl p-2 bg-blue-400 text-white font-bold">
            Submit
          </button>

          <p className="px-2">
            Already have an Account? kindly{" "}
            <Link to="/login" className="cursor-pointer">
              <span className="text-blue-600 font-semibold underline">
                Login
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
