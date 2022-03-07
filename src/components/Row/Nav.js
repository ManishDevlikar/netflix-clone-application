import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Nav.css"



function Nav() {

    const [show, handleShow] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <Link to="/">
                <img className="nav__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                    alt="Netflix Logo"
                />
            </Link>

            <select className='select__from'>
                <option value="/S0/" selected>select</option>
                <option value="/S1/">NetflixOriginals</option>
                <option value="/S2/">TrendingNow</option>
                <option value="/S3/">TopRated</option>
                <option value="/S4/">ActionMovies</option>
                <option value="/S5/">ComedyMovies</option>
                <option value="/S6/">HorrorMovies</option>
                <option value="/S7/">RomanticMovies</option>
                <option value="/S8/">Documentaries</option>
            </select>

            <img className="nav__avtar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="Netflix Logo"
            />

        </div>
    )
}

export default Nav
