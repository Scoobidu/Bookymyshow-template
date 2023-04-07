import React from "react";
import { moviesData } from "../components/data";

function RenderMovies({ movie, activeMovie, setMovie, setActiveMovie }) {
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
  return (
    <>
      <div className='border-2 rounded-2xl p-3 mt-3'>
        <h4>Select a Movie</h4>
        <div id='moviename' className=' mt-2'>
          {renderMovie(moviesData)}
        </div>
      </div>
    </>
  );
}

export default RenderMovies;
