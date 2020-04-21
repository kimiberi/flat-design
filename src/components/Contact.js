import React from 'react';
import '../App.scss';
import '../mediaqueries/DesktopTablet.scss';
import '../mediaqueries/Mobile.scss';
import Footer from './Footer';

function Contact() {
  return (
    <div id="contact">
      <section id="parent-contact">
        {/* DUE TO NO CLOUD BG — USE spacer-3 */}
        <div className="spacer-3" />
        <section className="padding-only">
          <div className="col-1">
            <span className="small-h2">Be The First On</span>
            <h2>Great Projects</h2>
          </div>
          <div className="spacer-1" />
          <div className="col-2">
            <input type="text" placeholder="email here" />
            <div className="spacer-1" />
            <button>SUBSCRIBE</button>
          </div>
        </section>
        {/* DUE TO .global-design margin-bottom: 0px; FOR ADJUST IN FOOTER — USE spacer-6 */}
        <div className="spacer-6" />
        <Footer />
      </section>
    </div>
  );
}

export default Contact;
