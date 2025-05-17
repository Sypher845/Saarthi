import React, { useRef, useState } from "react";
import saarthi_name from "../assets/saarthi_name.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { LocationSearchPanel } from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);

  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);

  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const confirmRidePanelRef = useRef(null);

  const [vehicleFound, setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null);

  const WaitingForDriverRef = useRef(null);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandeler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  useGSAP(
    function () {
      gsap.to(panelRef.current, {
        height: panelOpen ? "70%" : "0%",
      });
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanelOpen) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanelOpen]
  );

  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );

  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );

   useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(WaitingForDriverRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(WaitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-3"
        src={saarthi_name}
        alt="Logo"
      />

      <div className="h-screen w-screen">
        {/* Temporary image */}
        <img
          className="h-full w-full object-cover"
          src="https://imgs.search.brave.com/o-Q6bJ_pg1WafiZikzPkNL3w3nBizjXwgyusJsdxPxw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnNz/dGF0aWMubmV0L2d0/aUk3LmdpZg.gif"
          alt="map"
        />
      </div>

      <div className=" h-full object-cover flex flex-col justify-end absolute top-0 w-full ">
        <div className="h-[30%] bg-white p-6 relative">
          <h5
            className="absolute top-2 down-2 right-3 text-2xl"
            onClick={() => setPanelOpen(!panelOpen)}
          >
            {panelOpen ? (
              <i className="bi bi-arrow-down-circle"></i>
            ) : (
              <i className="bi bi-arrow-up-circle"></i>
            )}
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form onSubmit={(e) => submitHandeler(e)}>
            <div className="bg-gray-800 rounded-full  w-1 h-16 absolute line top-[42%] left-10"></div>
            <input
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onClick={() => setPanelOpen(true)}
              placeholder="Add a pickup location"
            />
            <input
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onClick={() => setPanelOpen(true)}
              placeholder="Enter your location"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white px-6">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed gap-4 z-10 bottom-0 px-2 py-6 pt-12 bg-white w-full translate-y-full"
      >
        <VehiclePanel
          setVehiclePanelOpen={setVehiclePanelOpen}
          setConfirmRidePanel={setConfirmRidePanel}
        />
      </div>

      <div
        ref={confirmRidePanelRef}
        className="fixed gap-4 z-10 bottom-0 px-2 py-6 pt-12 bg-white w-full translate-y-full"
      >
        <ConfirmRide
          setVehicleFound={setVehicleFound}
          setConfirmRidePanel={setConfirmRidePanel}
        />
      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed gap-4 z-10 bottom-0 px-2 py-6 pt-12 bg-white w-full translate-y-full"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

      <div
        ref={WaitingForDriverRef}
        className="fixed gap-4 z-10 bottom-0 px-2 py-6 pt-12 bg-white w-full"
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>
    </div>
  ); 
};

export default Home;
