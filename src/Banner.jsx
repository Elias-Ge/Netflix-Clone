import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from 'axios';
import './requests'
import requests from './requests';

const Banner = () => {
    const baseUrl = "https://api.themoviedb.org/3";
    const imageUrl = "https://image.tmdb.org/t/p/original"
    const [bannerPoster, setbannerPoster] = useState([]);
    useEffect(() => {
        const fetchPosters = async () => {
            const sourced = await axios.get(`${baseUrl}${requests.fetchNetflixOriginals}`);
            // console.log(sourced.data.results);
            // setbannerPoster(sourced.data.results[Math.floor(Math.random() * sourced.data.results.length)]);
            setbannerPoster(sourced.data.results.at(Math.floor(Math.random() * sourced.data.results.length)));

            return sourced.data.results;
        }
        fetchPosters();
    }, []);
    // console.log(bannerPoster);

    const truncateString = (str, num) => { return (str?.length > num ? str.slice(0, num) + "..." : str) };


    return (
        <header id="banner">
            <div className='banner__image'
                style={{
                    backgroundImage: `URL(${imageUrl}${bannerPoster.backdrop_path ? bannerPoster.backdrop_path : bannerPoster.poster_path})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top"
                }}>
                <div className='banner__contents'>
                    <h1 className='banner__title'>
                        {bannerPoster?.name || bannerPoster?.original_name || bannerPoster?.title}
                    </h1>
                    <div className='banner__buttons'>
                        <button className='banner__button'>Play</button>
                        <button className='banner__button'>My List</button>
                    </div>
                    <h1 className='banner__text--description'>
                        {truncateString(bannerPoster?.overview, 100)}
                    </h1>
                    <div className='banner__fadeBottom' />
                </div>

            </div>
        </header>
    )
}

export default Banner