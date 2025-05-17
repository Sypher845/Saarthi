const VehiclePanel = (props) => {
  return (
    <>
      <h5
        className="p-3 text-center absolute w-[95%] top-0"
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
      >
        <i className="bi bi-caret-down-fill text-gray-200"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 px-5">Choose a Vehicle</h3>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanelOpen(false);
        }}
        className="flex items-center justify-between p-2 mb-2 active:border-2 border-black rounded-xl"
      >
        <img
          className="h-15"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
          alt="Car"
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            Gaddi
            <span>
              <i className="bi bi-person-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹150</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanelOpen(false);
        }}
        className="flex items-center justify-between p-2 mb-2 active:border-2 border-black rounded-xl"
      >
        <img
          className="h-15"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt="Auto"
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            Auto{" "}
            <span>
              <i className="bi bi-person-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">5 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹100</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanelOpen(false);
        }}
        className="flex items-center justify-between p-2 mb-2 active:border-2 border-black rounded-xl"
      >
        <img
          className="h-15"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_277,w_491/v1631125074/assets/a5/65af2c-aa9a-48c7-a0de-af4037095837/original/uber-moto.png"
          alt="Bike"
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            Bike{" "}
            <span>
              <i className="bi bi-person-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹050</h2>
      </div>
    </>
  );
};

export default VehiclePanel;
