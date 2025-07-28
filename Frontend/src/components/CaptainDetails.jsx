import React from "react";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://imgs.search.brave.com/BtgojsVt0ZOsrOv6YADCxQZV4bG7CjUnGN14NylA0Ng/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9odWdn/aW5nZmFjZS5jby9z/ZC1kcmVhbWJvb3Ro/LWxpYnJhcnkvaG9n/LXJpZGVyL3Jlc29s/dmUvbWFpbi9jb25j/ZXB0X2ltYWdlcy8x/LmpwZWc"
            alt="Captain photu"
          />
          <h4 className="text-lg font-medium">Avnish Baby</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold ">₹295.10</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex p-5 mt-8 items-start justify-center gap-4 bg-green-300 rounded-xl">
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin bi bi-stopwatch"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin bi bi-speedometer2"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin bi bi-journal-text"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
