import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='dashboard'></Redirect>;
  }
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

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStatetoProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStatetoProps)(Landing);
