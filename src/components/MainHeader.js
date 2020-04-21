import React from 'react';
import '../App.scss';
import '../mediaqueries/DesktopTablet.scss';
import '../mediaqueries/Mobile.scss';
import keyvisual from '../images/keyvisual.png';

function MainHeader() {
  return (
    <div id="header">
      <header>
        <div className="row-1">
          <div className="spacer-1" />
          <p>Lorem ipsum dolor sit amet</p>
          <p className="slogan">
            A Weekly Digest <br />
            of the Newest Projects
          </p>
          <br />
          <button>SUBSCRIBE</button>
        </div>
        <div className="row-2">
          <img
            src={keyvisual}
            alt="Vector Illustration Team Project"
          />
        </div>
      </header>
    </div>
  );
}

export default MainHeader;
