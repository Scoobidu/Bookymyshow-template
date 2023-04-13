import React from "react";
import { slotsData } from "./data";

function RenderSlots({ activeSlot, setActiveSlot }) {
  //---------- mapping slots from data and rendering it -----------
  const renderSlot = (data) =>
    data.map((slotData, index) => (
      <div
        key={index}
        //------- if slotdata is same as selected slot appling active class -------
        className={` ${slotData === activeSlot ? "active" : ""} 
          movie-selection inline-block text-xl border-2 rounded-lg p-2 mr-3 my-2 cursor-pointer
          hover:border-blue-400
          focus:bg-red-500 focus:text-white focus:outline-none focus:border-blue-400`}
        onClick={() => {
          setActiveSlot(slotData); // selecting slot
        }}
      >
        <p className='m-0 lg:text-xl text-lg'>{slotData}</p>
      </div>
    ));
  return (
    <>
      {/*-------- rendering all slots ---------*/}

      <div className='border-2 rounded-2xl p-3 mt-3'>
        <h4 className='lg:text-2xl text-xl'>Select a Time slot</h4>
        <div className='mt-2'>{renderSlot(slotsData)}</div>
      </div>
    </>
  );
}

export default RenderSlots;
