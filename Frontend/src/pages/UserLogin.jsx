import React, { useState, useContext } from "react";
import saarthiLogo from "../assets/saarthi_name.png";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/userContext";
import axios from "axios";


const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const {user, setUser} = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler =async (e) => {
    e.preventDefault();

    const userData={
      email: email,
      password: password
    }
    const response= await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/login`, userData);

    if(response.status===200){
      const data= response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token); // Store token in local storage
      navigate("/home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-25" src={saarthiLogo} alt="Saarthi Logo" />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="border-2 bg-gray-100  border-gray-300 rounded-md p-2 mb-7 w-full"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="border-2 bg-gray-100 border-gray-300 rounded-md p-2 mb-7 w-full"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
          <button className="bg-black text-white font-semibold border-2 border-gray-300 p-2 mb-3 w-full rounded-2xl">
            Login
          </button>
          <p className="text-center text-gray-500 mb-3">
            New here?{" "}
            <Link to="/signup" className="text-blue-600">
              Create New Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="flex justify-center bg-green-400 text-black font-semibold border-2 border-gray-300 p-2 mb-5 w-full rounded-2xl"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
