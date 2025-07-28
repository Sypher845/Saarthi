import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import saarthi_name from "../assets/saarthi_name.png";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const ridePopUpPanelRef = useRef(null);

  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const confirmRidePopUpPanelRef = useRef(null);

  

  useGSAP(
    function () {
      if (ridePopUpPanel) {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopUpPanel]
  );

  useGSAP(
    function () {
      if (confirmRidePopUpPanel) {
        gsap.to(confirmRidePopUpPanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(confirmRidePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopUpPanel]
  );

  return (
    <div className="h-screen">
      <div>
        <img
          className="w-16 absolute right-5 top-3"
          src={saarthi_name}
          alt="Logo"
        />
        <Link
          to="/captain-home"
          className="fixed h-10 w-10 bg-white flex justify-center items-center rounded-full shadow-lg top-5 left-5"
        >
          <i className="text-2xl font-bold bi bi-box-arrow-left"></i>
        </Link>
      </div>

      <div className="h-3/5">
        {/* Temporary image */}
        <img
          className="h-full w-full object-cover"
          src="https://imgs.search.brave.com/o-Q6bJ_pg1WafiZikzPkNL3w3nBizjXwgyusJsdxPxw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnNz/dGF0aWMubmV0L2d0/aUk3LmdpZg.gif"
          alt="map"
        />
      </div>

      <div className="h-2/5 p-6">
        <CaptainDetails></CaptainDetails>
      </div>

      {/* Ride Pop up */}
      <div
        ref={ridePopUpPanelRef}
        className="fixed gap-4 z-10 bottom-0 px-2 py-6 pt-12 bg-white w-full translate-y-full"
      >
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
      </div>

      {/* Ride Confirm */}
      <div
        ref={confirmRidePopUpPanelRef}
        className="fixed gap-4 z-10 bottom-0 px-2 py-6 pt-12 bg-white w-full translate-y-full h-screen"
      >
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
      </div>
    </div>
  );
};
