import React from "react";
import { moviesData } from "../components/data";

function RenderMovies({ activeMovie, setActiveMovie }) {
  //-------- mapping movies from data and rendering it --------

  const renderMovie = (data) =>
    data.map((movieData, index) => (
      <div
        key={index}
        //------- if moviedata is same as selected movie appling active class -------
        className={` ${movieData === activeMovie ? "active" : ""} 
        movie-selection inline-block text-xl border-2 rounded-lg p-2 mr-3 my-2 cursor-pointer
          hover:border-blue-400
          focus:bg-red-500 focus:text-white focus:outline-none focus:border-blue-400`}
        onClick={() => {
          setActiveMovie(movieData); // selecting movie
        }}
      >
        <p className='  m-0 lg:text-xl text-lg'>{movieData}</p>
      </div>
    ));
  return (
    <>
      {/*------ rendering all movies --------*/}
      <div className='border-2 rounded-2xl p-3 mt-3'>
        <h4 className='lg:text-2xl text-xl'>Select a Movie</h4>
        <div id='moviename' className=' mt-2 '>
          {renderMovie(moviesData)}
        </div>
      </div>
    </>
  );
}

export default RenderMovies;
