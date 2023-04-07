import React from "react";
import { seatsData } from "../components/data";

function RenderSeats({ seat, setSeat, setActive }) {
  const renderSeats = (data) =>
    data.map((seatData, index) => (
      <div
        key={index}
        className={`inline-block w-32 text-xl text-center border-2 rounded-lg p-2 mr-3 ${
          seat[seatData] > 0 ? "activeSeat" : ""
        }`}
      >
        <p>Type {seatData}</p>
        <input
          type='number'
          value={seat[seatData]}
          min='0'
          className=' w-20 m-auto px-2'
          onChange={(e) => {
            const newSeats = { ...seat };
            newSeats[seatData] = parseInt(e.target.value);
            setSeat(newSeats);
            {
              e.target.value > 0 ? setActive(true) : setActive(false);
            }
          }}
        />
      </div>
    ));

  return (
    <>
      <div className='border-2 rounded-2xl p-3 mt-3'>
        <h4>Select the Seats</h4>
        <div className='mt-2'>{renderSeats(seatsData)}</div>
      </div>
    </>
  );
}

export default RenderSeats;
