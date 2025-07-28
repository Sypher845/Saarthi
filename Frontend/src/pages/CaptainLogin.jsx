import React, { useState,useContext } from "react";
import driver from "../assets/driver.png";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const navigate = useNavigate();
  
    const submitHandler = async(e) => {
      e.preventDefault();
      const captainData={
        email: email,
        password: password,
      };
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/captains/login`,
        captainData
      );
      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
      setEmail("");
      setPassword("");
    };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
    <div>
      <img className="w-25" src={driver} alt="Saarthi Logo" />

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}>
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
          Join a fleet?{" "}
          <Link to="/captain-signup" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </form>
    </div>
    <div>
      <Link
        to="/login"
        className="flex justify-center bg-lime-400 text-black font-semibold border-2 border-gray-300 p-2 mb-5 w-full rounded-2xl"
      >
        Sign in as User
      </Link>
    </div>
  </div>
  )
}

export default CaptainLogin