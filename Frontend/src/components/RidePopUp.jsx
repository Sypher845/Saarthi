import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setRidePopUpPanel((prev) => !prev);
        }}
        className="p-3 text-center absolute w-[95%] top-0"
      >
        <i className="bi bi-caret-down-fill text-gray-200"></i>
      </h5>
      <h3 className="text-2xl font-semibold px-5">New Ride Available!</h3>

      <div className="flex items-center justify-between p-2 mt-4 bg-green-600 text-white rounded-lg">
        <div className="flex items-center justify-between gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://imgs.search.brave.com/BtgojsVt0ZOsrOv6YADCxQZV4bG7CjUnGN14NylA0Ng/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9odWdn/aW5nZmFjZS5jby9z/ZC1kcmVhbWJvb3Ro/LWxpYnJhcnkvaG9n/LXJpZGVyL3Jlc29s/dmUvbWFpbi9jb25j/ZXB0X2ltYWdlcy8x/LmpwZWc"
            alt="Captain photu"
          />
          <h2 className="text-xl font-medium">Sangu Baby</h2>
        </div>
        <h5 className="text-lg font-semibold">2.3 Km away</h5>
      </div>

      <div className="flex flex-col justify-between items-center gap-2">
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

        <div className="flex items-center justify-between w-full mt-5">
          <button
            onClick={() => {
              props.setRidePopUpPanel(false);
            }}
            className=" bg-red-600 text-black font-semibold p-3 px-10 rounded-lg"
          >
            Ignore
          </button>
          <button
            onClick={() => {
              props.setConfirmRidePopUpPanel(true);
              props.setRidePopUpPanel(false);
            }}
            className=" bg-green-600 text-white font-semibold p-3 px-10 rounded-lg"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
