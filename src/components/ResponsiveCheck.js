import React from 'react';
import Responsive from 'react-responsive';

import Nav from './Nav';
import MainHeader from './MainHeader';
import About from './About';
import Services from './Services';
import Team from './Team';
import Contact from './Contact';
import TabletMobileView from './TabletMobileView';

const Desktop = (props) => <Responsive {...props} minWidth={801} />;
const Platform = (props) => (
  <Responsive {...props} maxWidth={800} minWidth={320} />
);

function ResponsiveView() {
  return (
    <div>
      <Desktop>
        <Nav />
        <MainHeader />
        <About />
        <Services />
        <Team />
        <Contact />
      </Desktop>
      <Platform>
        <TabletMobileView />
      </Platform>
    </div>
  );
}

export default ResponsiveView;
