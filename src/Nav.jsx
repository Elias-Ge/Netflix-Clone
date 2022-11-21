import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import './Nav.css'

const Nav = () => {
    const [show, setshow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            return (window.scrollY > 200 ? setshow(true) : setshow(false));
        });
        return () => { window.addEventListener("scroll"); };
    }, []);

    return (
            <div className={`nav ${show && "nav__black"}`}>
                <div>   
                <ul>
                    <li><Link to="banner" duration={500} smooth={true}>Home</Link></li>
                    <li><Link to="netflix-original" duration={500} offset={-55} smooth={true}>Netflix Originals</Link></li>
                    <li><Link to="trending-now" duration={500} offset={-55} smooth={true}>Trending Now</Link></li>
                    <li><Link to="top-rated" duration={500} offset={-55} smooth={true}>Top Rated</Link></li>
                    <li><Link to="popular" duration={500} offset={-55} smooth={true}>Popular</Link></li>
                    <li><Link to="now-playing" duration={500} offset={-55} smooth={true}>Now Playing</Link></li>
                    <li><Link to="upcoming" duration={500} offset={-55} smooth={true}>Upcoming</Link></li>
                </ul>
                </div>
                <img
                    className='nav__logo'
                    src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
                    alt="Netflix Logo" />

                <img
                    className='nav__avator'
                    src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avator" />
            </div>
            )
    }

            export default Nav