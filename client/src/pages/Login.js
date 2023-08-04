import React, { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const initialUser = {
  username: "",
  email: "",
  password: "",
};

function Login() {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await loginUser(user);
    if (status === "success") {
      navigate("/");
    } else {
      alert(message);
    }
  };
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center py-8">Login</h1>
      <div className="w-full h-full flex justify-center">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="border shadow-xl rounded-xl h-96 w-full sm:w-2/3 md:w-1/2 flex flex-col gap-y-4 pt-12 px-4 lg:px-8 mx-4 sm:mx-0 "
        >
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username"
            className="border-2 rounded-xl p-2"
          />

          <div className="w-full h-2 flex items-center gap-x-2 px-6 my-2">
            <p className=" border-b-2  w-2/3  "></p>
            <span>Or</span>
            <p className=" border-b-2  w-2/3  "></p>
          </div>
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
          <button className="border-2 rounded-xl p-2 bg-blue-400 text-white font-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
