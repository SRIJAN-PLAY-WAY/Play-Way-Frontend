// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import './Ending.scss';

const Ending = ({ width }) => {
  return (
    <section className="Ending">
      <div className="ending-container">
        <EndingText width={width} />
        <Link to="/join">Join the School</Link>
      </div>
    </section>
  );
};

const EndingText = ({ width }) => {
  if (width < 700) {
    // Vertical phones
    return (
      <h2>
        Unlock your child's full potential at Srijan Play Way.
      </h2>
    );
  } else {
    // Landscape phones, tablets and desktops
    return (
      // eslint-disable-next-line
      <h2 role="text">
        Unlock your child's full potential at 
        <br />
        Srijan Play Way.
      </h2>
    );
  }
};

export default Ending;
