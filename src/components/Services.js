import React from 'react';
import '../App.scss';
import '../mediaqueries/DesktopTablet.scss';
import '../mediaqueries/Mobile.scss';
import youngEmployee from '../images/young-employee.png';
import coEmployee from '../images/co-employee.png';
import youngMan from '../images/young-man.png';
import womanEmployee from '../images/woman-employee.png';

function Services() {
  return (
    <div id="services">
      <div className="bg-cloud-white" />
      <section id="parent-services">
        <div className="col-1">
          <span className="small-h2">How We</span>
          <h2>Think & Act</h2>
        </div>
        <div className="spacer-2" />
        <div className="col-2">
          {/* LEFT SIDE CONTENT */}
          <article className="row-1">
            <img src={youngEmployee} />
            <div className="spacer-1" />
            <h3>We Chat</h3>
            <p>
              Vivamus elementum semper nisi. Aenean vulputate eleifend
              tellus. Aenean leo ligula, porttitor eu, consequat
              vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
              in, viverra quis, feugiat a, tellus. Phasellus viverra
              nulla ut metus varius laoreet.
            </p>
            <div className="spacer-4" />
            <img src={coEmployee} />
            <div className="spacer-1" />
            <h3>We Prepare</h3>
            <p>
              Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
              id, lorem. Maecenas nec odio et ante tincidunt tempus.
              Donec vitae sapien ut libero venenatis faucibus. Nullam
              quis ante. Etiam sit amet orci eget eros faucibus
              tincidunt.
            </p>
          </article>
          {/* RIGHT SIDE CONTENT */}
          <article className="row-2">
            <div className="spacer-3" />
            <img src={youngMan} />
            <div className="spacer-1" />
            <h3>We Launch</h3>
            <p>
              Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
              vel augue. Curabitur ullamcorper ultricies nisi. Nam
              eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
              condimentum rhoncus, sem quam semper libero, sit amet
              adipiscing sem neque sed ipsum.
            </p>
            <div className="spacer-4" />
            <img src={womanEmployee} />
            <div className="spacer-1" />
            <h3>You Grow</h3>
            <p>
              Nullam quis ante. Etiam sit amet orci eget eros faucibus
              tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
              Donec sodales sagittis magna. Sed consequat, leo eget
              bibendum sodales.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Services;
