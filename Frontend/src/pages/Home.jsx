import React from "react";
import { Link } from "react-router-dom";
import saarthiLogo from '../assets/saarthi_name.png';
import homeImage from '../assets/home.png';

function Home() {
  return (
    <div>
      <div 
        style={{ backgroundImage: `url(${homeImage})` }}
        className="bg-cover pt-5 flex flex-col justify-between h-screen w-full"
      >
        <img className="w-20 ml-8" src={saarthiLogo} alt="Saarthi Logo" />
        <div className="bg-white py-4 px-4 pb-7">
          <h2 className="text-2xl font-bold ">Get Started With Saarthi </h2>
          <Link to="/login" className="flex item-center justify-center w-full bg-black text-white py-3 rounded-2xl mt-5">Continue</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
