import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './VideosRow.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const VideosRow = ({ id, rowID, title, fetchUrl, isLargeRow }) => {
  const baseUrl = "https://api.themoviedb.org/3";
  const imageUrl = "https://image.tmdb.org/t/p/original"

  const [movies, setmovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const sourced = await axios.get(`${baseUrl}${fetchUrl}`);
      // console.log(sourced.data.results);
      setmovies(sourced.data.results);
      return sourced;
    }
    fetchData();
  }, [fetchUrl]);
  // console.log(movies)
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  }

  const opts = {
    height: "300vh",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }

  const slideLeft = () => {
    const slider = document.getElementById('slider'+ rowID);
    slider.scrollLeft = slider.scrollLeft - 600;
  };

  const slideRight = () => {
   const slider = document.getElementById("slider" +rowID);
    slider.scrollLeft = slider.scrollLeft + 600;
  };

  return (
    <div className='row'>
      <h1 id={id}>{title}</h1>
      <div className='group relative flex items-center'>       
        <MdChevronLeft className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block text-black hidden hover:block' onClick={slideLeft} size={40} />
      <div id={'slider'+ rowID} className='row__posters relative whitespace-nowrap'>
        {movies?.map((m) => {
          return (<img 
            onClick={() => handleClick(m)}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`} key={m.id}
            src={`${imageUrl}${isLargeRow ? m.poster_path : (!m.backdrop_path ? m.poster_path : m.backdrop_path)}`}
            alt={movies.original_title} />)
        })}
      </div>
      <MdChevronRight className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block text-black hidden hover:block' onClick={slideRight} size={40} />
      </div>
      <div style={{ padding: "10px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl}  opts={opts}/>}
      </div>
    </div>
  )
}

export default VideosRow

