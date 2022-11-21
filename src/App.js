import './App.css';
import VideosRow from './VideosRow';
import requests from './requests.js'
import Banner from './Banner';
import Nav from './Nav';
// import { useState } from 'react';

function App() {
  //   const [xPos, setXpos] = useState(0);
  //   const onClick = (direction) => {
  //     (direction === "left") ? setXpos(x => x - 100) : setXpos(x => x + 100)
  // }
  return (
    <div>
      <Nav />
      <Banner />
      <VideosRow rowID='1' id="netflix-original" title={"NETFLIX ORIGINALS"} fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <VideosRow rowID='2' id="trending-now" title={"Trending Now"} fetchUrl={requests.fetchTrendingNow} />
      <VideosRow rowID='3' id="top-rated" title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <VideosRow rowID='4' id="popular" title={"Popular"} fetchUrl={requests.fetchPopular} />
      <VideosRow rowID='5' id="now-playing" title={"Now Playing"} fetchUrl={requests.fetchNowPlaying} />
      <VideosRow rowID='6' id="upcoming" title={"Upcoming"} fetchUrl={requests.fetchUpcoming} />
     
    </div>
  );
}

export default App;
