import React from 'react';
import '../App.scss';
import '../mediaqueries/DesktopTablet.scss';
import business from '../images/business-design.png';

function Team() {
  return (
    <div id="team">
      <div className="bg-cloud-pink" />
      <section id="parent-team">
        <aside className="row-1">
          <img src={business} />
        </aside>
        <article className="row-2">
          <div className="col-1">
            <span className="small-h2">All In</span>
            <h2>One Workspace</h2>
          </div>
          <div className="spacer-1" />
          <div className="col-2">
            <p>
              Donec pede justo, fringilla vel, aliquet nec, vulputate
              eget, arcu. In enim justo, rhoncus ut, imperdiet a,
              venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
              elementum semper nisi. Aenean vulputate eleifend tellus.
              Aenean leo ligula, porttitor eu, consequat vitae,
              eleifend ac, enim.
            </p>
            <br/>
            <p>
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tellus. Phasellus viverra nulla ut metus varius laoreet.
              Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
              vel augue. Curabitur ullamcorper ultricies nisi. Nam
              eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
              condimentum rhoncus, sem quam semper libero, sit amet
              adipiscing sem neque sed ipsum. Nam quam nunc, blandit
              vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec
              odio et ante tincidunt tempus.
            </p>
            <br/>
            <p>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis
              leo. Sed fringilla mauris sit.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Team;
