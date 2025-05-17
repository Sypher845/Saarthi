import React from 'react'

export const LocationSearchPanel = (props) => {
  const sampleAddresses = [
    "Vaikunt appartment, Bhausaheb, Hire, Nagar, Nashik",
    "Sunshine Residency, MG Road, Pune",
    "Green Valley, Sector 21, Gurugram",
    "Lakeview Towers, Powai, Mumbai",
    "Rosewood Apartments, Baner, Pune",
    "Silver Oak Villas, Whitefield, Bengaluru",

  ];

  return (
    <div>
      {sampleAddresses.map((address, idx) => (
        <div key={idx} onClick={()=>{
          props.setVehiclePanelOpen(true);
          props.setPanelOpen(false);
        }} className='flex items-center justify-start gap-4 my-4 border-2 border-gray-100 active:border-black px-3 rounded-xl'>
          <h2 className='bg-[#eee] flex items-center justify-center h-10' style={{ width: '20px', borderRadius: '9999px' }}>
            <i className="bi bi-geo-alt-fill"></i>
          </h2>
          <h4 className='font-medium'>{address}</h4>
        </div>
      ))}
    </div>
  )
}
