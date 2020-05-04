import React from 'react';
import { Link } from 'react-router-dom';
export const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>SST Community Hub</h1>
          <p className='lead'>
            A Private Hub for posting and sharing between RMIT SGS SST Students
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-danger'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Landing;
