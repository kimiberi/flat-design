import React from 'react';
import '../App.scss';
import '../mediaqueries/DesktopTablet.scss';
import '../mediaqueries/Mobile.scss';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';

function Nav() {
  return (
    <div>
      <div id="nav-root">
        <span id="main-title">
          <a href="#">minimalist</a>
        </span>

        <nav>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>

        <div id="social-icons">
          <a href="#" class="icon-margin">
            <img class="icon-size" src={facebook} />
          </a>
          <a href="#" class="icon-margin">
            <img class="icon-size" src={instagram} />
          </a>
          <a href="#" class="icon-margin">
            <img class="icon-size" src={twitter} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
