import React from 'react';
import SidePanel from './SidePanel';
import '../mediaqueries/SidePanelStyle.scss';

import '../mediaqueries/DesktopTablet.scss';
import '../mediaqueries/Mobile.scss';
import About from './About';
import Services from './Services';
import Team from './Team';
import Contact from './Contact';
import MainHeader from './MainHeader';

function Platform() {
  return (
    <div id="Platform">
      <SidePanel pageWrapId={'page-wrap'} outerContainerId={'Platform'} />

      <div id="page-wrap">
        <div id="nav-root">
          <span id="main-title">
            <a href="#">minimalist</a>
          </span>
        </div>
      </div>
      <MainHeader />
      <About />
      <Services />
      <Team />
      <Contact />
    </div>
  );
}

export default Platform;
