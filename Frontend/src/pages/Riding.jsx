import React from "react";
import {Link} from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to='/home' className="fixed h-10 w-10 bg-white flex justify-center items-center rounded-full shadow-lg top-5 left-5">
        <i className="text-lg font-semibold bi bi-house-door-fill"></i>
      </Link>

      <div className="h-1/2">
        {/* Temporary image */}
        <img
          className="h-full w-full object-cover"
          src="https://imgs.search.brave.com/o-Q6bJ_pg1WafiZikzPkNL3w3nBizjXwgyusJsdxPxw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnNz/dGF0aWMubmV0L2d0/aUk3LmdpZg.gif"
          alt="map"
        />
      </div>

      <div className="h-1/2 p-4">
        <div className="flex justify-between items-center gap-2">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
            alt="Vehicle"
          />
          <h3 className="text-2xl font-semibold mb-5 px-5">
            Waiting for Driver
          </h3>
          <div className="text-right">
            <h2 className="text-lg font-medium">Avnish</h2>
            <h4 className="text-xl font-semibold -mt-1 -md-1">MH153126</h4>
            <p className="text-sm text-gray-600">Marauti Suzuki Alto</p>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center gap-2">
          <div className="w-full mt-5">
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
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">Make a payment</button>
      </div>

    </div>
  );
};

export default Riding;
