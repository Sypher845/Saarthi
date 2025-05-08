import React, { useState , useContext} from "react";
import saarthiLogo from "../assets/saarthi_name.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/userContext";

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {user ,setUser} = useContext(UserDataContext);

  const submitHandler =async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: { firstName: firstName, lastName: lastName },
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/register`, newUser);

    if (response.status === 201) {
      const data= response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token); // Store token in local storage
      navigate("/home");
    }

    setFirstName("");
    setLastName("");
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
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-4 mb-5">
            <input
              className="border-2 bg-gray-100  border-gray-300 rounded-md p-2 w-1/2 text-lg placeholder:text-base"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="First Name"
            />
            <input
              className="border-2 bg-gray-100  border-gray-300 rounded-md p-2 w-1/2 text-lg placeholder:text-base"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="border-2 bg-gray-100  border-gray-300 rounded-md p-2 mb-5 w-full text-lg placeholder:text-base"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="border-2 bg-gray-100 border-gray-300 rounded-md p-2 mb-5 w-full text-lg placeholder:text-base"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
          <button className="bg-black text-white font-semibold border-2 border-gray-300 p-2 mb-3 w-full rounded-2xl">
            Create Account
          </button>
          <p className="text-center text-gray-500 mb-3">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Log in here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and
          <span className="underline">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
