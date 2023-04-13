import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import { seatsData } from "../components/data";
import RenderMovies from "../components/RenderMovies";
import RenderSlots from "../components/RenderSlots";
import RenderSeats from "../components/RenderSeats";
import BookingData from "../components/BookingData";

const App = () => {
  const [activeMovie, setActiveMovie] = useState(""); // movie initial value
  const [activeSlot, setActiveSlot] = useState(""); // slot initial value

  const initialSeats = {};
  seatsData.forEach((seat) => {
    // making an object having key as seat-type having initial values 0
    initialSeats[seat] = 0;
  });
  const [seat, setSeat] = useState(initialSeats); // seat initial value

  const [active, setActive] = useState(false); // boolen to check if any seat selected

  //---------- success Notification for movie booked -----------
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

  //----------- error Notification if anything not selected -----------
  const notifyerr = (val) => {
    toast.error(val, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  //----------- function to book movie ----------
  const addBooking = async (e) => {
    e.preventDefault();

    //--------- checking if user selects all the fields ----------
    if (activeMovie !== "" && activeSlot !== "" && active) {
      //------- posting data in backend ----------
      await fetch(`https://bmsbackend.onrender.com/api/booking`, {
        method: "post",
        body: JSON.stringify({
          movie: activeMovie,
          slot: activeSlot,
          seats: seat,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      //-------- notification for successful booking ---------
      notify("Booked Successfully");

      //--------- setting everithing to default ----------
      setActiveMovie("");
      setActiveSlot("");
      setSeat(initialSeats);
      setActive(false);
    } else {
      if (!activeMovie) {
        //---------- if movie not selected show error ----------
        notifyerr("Movie not selected");
      }

      if (!activeSlot) {
        //---------- if slot not selected show error ----------
        notifyerr("Time slot not selected");
      }

      if (!active) {
        //---------- if seat not selected show error ----------
        notifyerr("Select Valid Seat");
      }
    }
  };

  return (
    <>
      <div className='flex lg:flex-row flex-col '>
        <div className='lg:w-11/12 mx-auto '>
          <form className='py-16 lg:pl-5 lg:pr-3 p-3'>
            <h3 className='lg:text-3xl text-2xl'>Book that show!!</h3>

            {/*--------- all movies ----------*/}
            <RenderMovies
              activeMovie={activeMovie}
              setActiveMovie={setActiveMovie}
            />
            {/*--------- all slots ----------*/}
            <RenderSlots
              activeSlot={activeSlot}
              setActiveSlot={setActiveSlot}
            />

            {/*--------- all seats ----------*/}
            <RenderSeats
              seat={seat}
              setSeat={setSeat}
              active={active}
              setActive={setActive}
            />

            {/*---------- book now btn ---------*/}
            <button
              className='book-button focus:outline-none focus:shadow-outline hover:-translate-y-1  transition-all ease-in-out duration-150'
              type='submit'
              onClick={(e) => addBooking(e)}
            >
              <h4 className='my-0 lg:text-2xl sm:text-xl text-lg'>Book Now</h4>
            </button>
          </form>
        </div>
        {/*---------- rendering booking data fetched from backend ------------*/}
        <div className='lg:w-2/5 w-fit mx-auto py-16 lg:pl-3 lg:pr-5'>
          <BookingData />
        </div>
        {/*--------- notification component imported from toastify ----------*/}
        <ToastContainer />
      </div>
    </>
  );
};

export default App;
