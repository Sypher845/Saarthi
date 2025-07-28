import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import saarthi_name from "../assets/saarthi_name.png";
import FinishRide from "../components/FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );
  return (
    <div className="h-screen relative">
      <div>
        <img
          className="w-16 absolute right-5 top-3"
          src={saarthi_name}
          alt="Logo"
        />
        <Link
          to="/home"
          className="fixed h-10 w-10 bg-white flex justify-center items-center rounded-full shadow-lg top-5 left-5"
        >
          <i className="text-2xl font-bold bi bi-box-arrow-left"></i>
        </Link>
      </div>

      <div className="h-4/5">
        {/* Temporary image */}
        <img
          className="h-full w-full object-cover"
          src="https://imgs.search.brave.com/o-Q6bJ_pg1WafiZikzPkNL3w3nBizjXwgyusJsdxPxw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnNz/dGF0aWMubmV0L2d0/aUk3LmdpZg.gif"
          alt="map"
        />
      </div>

      <div
        className="h-1/5 p-6 flex items-center justify-center relative bg-black"
        onClick={() => setFinishRidePanel(true)}
      >
        <h5 className="p-3 text-center text-white absolute w-[95%] top-0">
          <i className="bi bi-caret-up-fill text-white"></i>
        </h5>
        <h4 className="text-xl font-semibold text-white">5 Km away</h4>
        <button className="w-full mt-1 bg-green-400 text-black font-semibold p-3 rounded-lg">
          Complete Ride
        </button>
      </div>

      {/* Ride Pop up */}
      <div
        ref={finishRidePanelRef}
        className="fixed gap-4 z-10 bottom-0 px-2 py-6 pt-12 bg-white w-full translate-y-full"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>
    </div>
  );
};

export default CaptainRiding;
