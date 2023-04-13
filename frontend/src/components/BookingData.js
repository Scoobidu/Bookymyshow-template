import React from "react";
import { useEffect, useState } from "react";

const BookingData = () => {
  const [bookingInfo, setBookingInfo] = useState([]); // initial value for all bookings details

  //--------- fetching data from the backend ----------
  useEffect(() => {
    const fetchData = async () => {
      return fetch("https://bmsbackend.onrender.com/api/all-bookings")
        .then((response) => response.json()) // converting to json object
        .then((data) => {
          // if there are previous bookings
          setBookingInfo(data); // adding details in bookingInfo array
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
    // console.log(bookingInfo);
  });

  return (
    <>
      <div className='flex'>
        <h3 className='w-8/12 mb-3 lg:text-3xl text-2xl'>All Bookings</h3>
        <p className='self-end justify-self-end'>
          Total Bookings : {bookingInfo.length}
        </p>
      </div>
      <div className='flex flex-col-reverse'>
        {/*-------- If there are no previous bookings ---------*/}
        {bookingInfo.length == 0 ? (
          <div className='text-center'>no previous booking found</div>
        ) : (
          //--------- If there are previous bookings -------------
          //--------- mapping through each movies in bookingInfo for rendering it ----------
          bookingInfo.map((info, index) => (
            <div className='mb-4' key={index}>
              <div className='border-2 rounded-2xl p-4 bg-white'>
                <h4 className='lg:text-2xl text-xl'>Last Booking Details</h4>
                <p className='font-bold mb-1'>Seats:</p>
                {/*-------- mapping seat object ----------*/}
                {Object.entries(info.seats).map(([seat, count]) => (
                  <p key={seat} className='mb-1'>
                    <span className='font-bold'>{seat}: </span>
                    {count}
                  </p>
                ))}

                <p className=' mb-1'>
                  <span className='font-bold'>Slot: </span>
                  {info.slot}
                </p>
                <p className=' mb-1'>
                  <span className='font-bold'>Movie: </span>
                  {info.movie}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default BookingData;
