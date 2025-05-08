import React, { useState, useContext } from "react";
import driver from "../assets/driver.png";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/captains/register`,
      captainData
    );
    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-25" src={driver} alt="Saarthi Logo" />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">
            What's our Captain's name
          </h3>
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

          <h3 className="text-lg font-medium mb-2">
            What's our Captain's email
          </h3>
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

          <h3 className="text-lg font-medium mb-2">Vehicle Details</h3>
          <div className="flex gap-4 mb-5">
            <input
              className="border-2 bg-gray-100 border-gray-300 rounded-md p-2 w-1/2 text-lg placeholder:text-base"
              type="text"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              required
              placeholder="Vehicle Color"
            />
            <input
              className="border-2 bg-gray-100 border-gray-300 rounded-md p-2 w-1/2 text-lg placeholder:text-base"
              type="text"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              required
              placeholder="Vehicle Plate Number"
            />
          </div>
          <div className="flex gap-4 mb-5">
            <input
              className="border-2 bg-gray-100 border-gray-300 rounded-md p-2 w-1/2 text-lg placeholder:text-base"
              type="number"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              required
              placeholder="Vehicle Capacity"
            />
            <select
              className="border-2 bg-gray-100 border-gray-300 rounded-md p-2 w-1/2 text-lg placeholder:text-base appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          <button className="bg-black text-white font-semibold border-2 border-gray-300 p-2 mb-3 w-full rounded-2xl">
            Create Captain Account
          </button>
          <p className="text-center text-gray-500 mb-3">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-blue-600">
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

export default CaptainSignup;
