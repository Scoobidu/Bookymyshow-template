import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/App.css";
// import "../styles/selectCSS";
import "../styles/bootstrap.min.css";
import { moviesData, slotsData, seatsData } from "./data";
import BookingCards from "./BookingCards";

const App = () => {
  const [movie, setMovie] = useState("");
  const [slot, setSlot] = useState("");
  // const initialSeats = new Array(seatsData.length).fill(0);
  const initialSeats = {};
  seatsData.forEach((seat) => {
    initialSeats[seat] = 0;
  });
  const [seat, setSeat] = useState(initialSeats);
  const [activeMovie, setActiveMovie] = useState("");
  const [activeSlot, setActiveSlot] = useState("");
  const [active, setActive] = useState(false);

  // useEffect(() => {
  //   console.log("initialseats", initialSeats);
  //   console.log("seat", seat);
  // console.log(active);
  // });

  const notify = (val) => {
    toast.success(val, {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const notifyerr = (val) => {
    toast.error(val, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const addBooking = async (e) => {
    e.preventDefault();
    // console.log(seat);

    if (movie !== "" && slot !== "" && active) {
      console.log(movie);
      console.log(slot);
      console.log(seat);

      await fetch(`https://bmsbackend.onrender.com/api/booking`, {
        method: "post",
        body: JSON.stringify({
          movie: movie,
          slot: slot,
          seats: seat,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      notify("Booked Successfully");

      setMovie("");
      setActiveMovie("");
      setSlot("");
      setActiveSlot("");
      setSeat(initialSeats);
      setActive(false);
    } else {
      notifyerr("Missing Something");
    }
  };

  const renderMovie = (data) =>
    data.map((movieData, index) => (
      <div
        key={index}
        className={` ${
          movieData === activeMovie ? "active" : ""
        } movie-selection inline-block text-xl border-2 rounded-lg p-2 mr-3 my-2 cursor-pointer
          hover:border-blue-400
          focus:bg-red-500 focus:text-white focus:outline-none focus:border-blue-400`}
        onClick={() => {
          setMovie(movieData);
          setActiveMovie(movieData);
        }}
      >
        {movieData}
      </div>
    ));

  const renderSlot = (data) =>
    data.map((slotData, index) => (
      <div
        key={index}
        className={` ${
          slotData === activeSlot ? "active" : ""
        } movie-selection inline-block text-xl border-2 rounded-lg p-2 mr-3 my-2 cursor-pointer
          hover:border-blue-400
          focus:bg-red-500 focus:text-white focus:outline-none focus:border-blue-400`}
        onClick={() => {
          setSlot(slotData);
          setActiveSlot(slotData);
        }}
      >
        {slotData}
      </div>
    ));

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
            // const newValue = parseInt(e.target.value);
            // setSeat([
            //   ...seat.slice(0, index),
            //   newValue,
            //   ...seat.slice(index + 1),
            // ]);
          }}
        />
      </div>
    ));
  return (
    <>
      <div className='flex'>
        <div className='w-11/12 mx-auto '>
          <form className='py-16 pl-5 pr-3'>
            <h3 className=''>Book that show!!</h3>
            <div className='border-2 rounded-2xl p-3 mt-3'>
              <h4>Select a Movie</h4>
              <div id='moviename' className=' mt-2'>
                {renderMovie(moviesData)}
              </div>
            </div>
            <div className='border-2 rounded-2xl p-3 mt-3'>
              <h4>Select a Time slot</h4>
              <div className='mt-2'>{renderSlot(slotsData)}</div>
            </div>
            <div className='border-2 rounded-2xl p-3 mt-3'>
              <h4>Select the Seats</h4>
              <div className='mt-2'>{renderSeats(seatsData)}</div>
            </div>
            <button
              className='book-button focus:outline-none focus:shadow-outline'
              type='submit'
              onClick={(e) => addBooking(e)}
            >
              Book Now
            </button>
          </form>
        </div>
        <div className='w-2/5 py-16 pl-3 pr-5'>
          <BookingCards />
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default App;
