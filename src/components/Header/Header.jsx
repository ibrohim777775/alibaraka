import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import VideoPlayer from "react-background-video-player";
import {FaBars, FaTimes, FaPlay} from 'react-icons/fa';
import {BsTelephone, BsArrowRight} from 'react-icons/bs';
import StyledHeader from './HeaderStyle';
import logo from '../../assets/images/logo.svg';
import video from '../../assets/CLAAS Dominator 208 Combine working video.mp4';

const Header = () => {
  const [click, setClick] = useState(false);
  const VIDEO_URL = '%PUBLIC_URL%/assets/CLAAS Dominator 208 Combine working video.mp4'

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <header>
      <StyledHeader>
        <div className="header">

       
          {/* <img className='header__bg' src={bgimg} alt="" /> */}
          {/* <video  id="myVideo">
            <source src={video} type="video/mp4" />
          </video> */}
          {/* <VideoPlayer
            className="video"
            src={video}
            autoPlay={true}
            muted={true}
          /> */}
          
          <div className='container'>
            {/* <div className={click ? "main-container" : ""}  onClick={()=>Close()} /> */}
              <nav className="navbar" onClick={e => e.stopPropagation()}>
                <div className="nav-container">
                  <NavLink exact to="/" className="nav-logo">
                    <img src={logo}/>
                  </NavLink>
                  <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/"
                        activeClassName="active"
                        className="nav-links"
                        onClick={click ? handleClick : null}
                      >
                        Products
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/about"
                        activeClassName="active"
                        className="nav-links"
                        onClick={click ? handleClick : null}
                      >
                        About us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/blog"
                        activeClassName="active"
                        className="nav-links"
                        onClick={click ? handleClick : null}
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/contact"
                        activeClassName="active"
                        className="nav-links"
                      onClick={click ? handleClick : null}
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li className="nav-item-phone">
                      <div className="phone">
                        <BsTelephone className='phone__icon'/>
                      </div>
                      <div className="phone__numbers">
                        <a href="tel:+998950048090" className="nav-links-phone">
                          95-004-80-90
                        </a> <br />
                        <a href="tel:+998946414000" className="nav-links-phone">
                          94-641-40-00
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div className="nav-icon" onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                  </div>
                </div>
              </nav>
              <section className="header__items">
                <div className="header__left">
                  <h1 className="title">
                    ВСЕ ДЛЯ ТЕПЛИЦ
                  </h1>
                  <p className="header__desc">
                    Here will be brief information about our company and some <br /> of advantages of our offers. Here will be brief <br /> information about our company.
                  </p>
                  <Link to='/' className='header__left-link'>
                    EXPLORE
                    <BsArrowRight/>
                  </Link>
                </div>
                <div className="header__right">
                  <div className="play__icon">
                    <FaPlay className='play'/>
                  </div>
                </div>
              </section>
            </ div>
          </div>
      </StyledHeader>
    </header>
  );
}

export default Header;
