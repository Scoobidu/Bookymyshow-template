import React, { useState } from "react";
import "../styles/App.css";
import { seatsData } from "../components/data";

function RenderSeats({ seat, setSeat, setActive }) {
  const [errActive, setErrActive] = useState(false);

  //-------- mapping seats from data and rendering it ----------
  const renderSeats = (data) =>
    data.map((seatData, index) => (
      <div
        key={index}
        //------- if seat is greater than 0 appling active class -------
        className={` flex sm:flex-col sm:inline-block sm:w-32 w-11/12 lg:text-xl text-lg  text-center border-2 rounded-lg sm:p-2 p-1 sm:mr-3 sm:mb-3 ${
          seat[seatData] > 0 ? "activeSeat" : ""
        }`}
      >
        <p className='lg:text-xl text-lg sm:pb-3 sm:px-0 px-7 my-auto'>
          Type {seatData}
        </p>

        <input
          type='number'
          value={seat[seatData]}
          min='0'
          max='15'
          className='lg:w-20 w-16 m-auto px-2'
          onChange={(e) => {
            const newSeats = { ...seat };
            newSeats[seatData] = parseInt(e.target.value);
            setSeat(newSeats);
            {
              e.target.value > 0 && e.target.value <= 15
                ? setActive(true)
                : setActive(false);
            }
            {
              e.target.value > 15 ? setErrActive(true) : setErrActive(false);
            }
          }}
        />
      </div>
    ));

  return (
    <>
      {/*------- rendering all seats ---------*/}
      <div className='border-2 rounded-2xl p-3 mt-3'>
        <h4 className='lg:text-2xl text-xl'>Select the Seats</h4>
        <div className='mt-2'>{renderSeats(seatsData)}</div>
        <p
          className={` err m-0 text-lg text-red-500 ${
            errActive ? "" : "invisi"
          }`}
        >
          Select between 0 to 15
        </p>
      </div>
    </>
  );
}

export default RenderSeats;
