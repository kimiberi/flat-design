import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../mediaqueries/SidePanelStyle.scss';

import '../mediaqueries/DesktopTablet.scss';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';

function SidePanel(props) {
  return (
    <Menu {...props}>
      <div id="nav-root">
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
        <br />
          <a href="#header">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
      </div>
    </Menu>
  );
}

export default SidePanel;
