import React from "react";

const LookingForDriver = (props) => {
  return (
    <>
      <h5 onClick={()=>{
        props.setVehicleFound(false);
      }} className="p-3 text-center absolute w-[95%] top-0">
        <i className="bi bi-caret-down-fill text-gray-200"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 px-5">Looking for a Driver</h3>
      <div className="flex flex-col justify-between items-center gap-2">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
          alt="Vehicle"
        />

        <div className="w-full mt-5">
          <div className="flex items-center justify-baseline p-2 mb-2 border-b-2 border-gray-200">
            <i className="bi bi-geo-alt-fill text-lg w-[20%] pl-3"></i>
            <div className="w-[80%]">
              <h3 className="text-lg font-medium">Vaikunth Appartment</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Bhausaheb Hire Nagar
              </p>
            </div>
          </div>
          <div className="flex items-center justify-baseline p-2 mb-2 border-b-2 border-gray-200">
            <i className="bi bi-pin-map-fill text-lg w-[20%] pl-3"></i>
            <div className="w-[80%]">
              <h3 className="text-lg font-medium">Vaikunth Appartment</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Bhausaheb Hire Nagar
              </p>
            </div>
          </div>
          <div className="flex items-center justify-baseline p-2 mb-2 ">
            <i className="bi bi-cash text-lg w-[20%] pl-3"></i>
            <div className="w-[80%]">
              <h3 className="text-lg font-medium">₹150</h3>
              <p className="text-sm text-gray-600 -mt-1">Cash or UPI</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LookingForDriver;
