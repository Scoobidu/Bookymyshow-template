import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/App.css";
// import "../styles/selectCSS";
import "../styles/bootstrap.min.css";
import { seatsData } from "../components/data";
import RenderMovies from "../components/RenderMovies";
import RenderSlots from "../components/RenderSlots";
import RenderSeats from "../components/RenderSeats";
import BookingData from "../components/BookingData";

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

  return (
    <>
      <div className='flex'>
        <div className='w-11/12 mx-auto '>
          <form className='py-16 pl-5 pr-3'>
            <h3 className=''>Book that show!!</h3>

            <RenderMovies
              movie={movie}
              setMovie={setMovie}
              activeMovie={activeMovie}
              setActiveMovie={setActiveMovie}
            />
            <RenderSlots
              slot={slot}
              setSlot={setSlot}
              activeSlot={activeSlot}
              setActiveSlot={setActiveSlot}
            />

            <RenderSeats seat={seat} setSeat={setSeat} setActive={setActive} />

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
          <BookingData />
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default App;
