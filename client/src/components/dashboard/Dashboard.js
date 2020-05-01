import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
<<<<<<< HEAD
import Experience from './Experience';
import Education from './Education';
=======
>>>>>>> 8b8e67a29324ea923f984e71316dead9411b9f95
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
<<<<<<< HEAD
    // eslint-disable-next-line react-hooks/exhaustive-deps
=======
>>>>>>> 8b8e67a29324ea923f984e71316dead9411b9f95
  }, []);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-danger'> Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome back, {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
<<<<<<< HEAD
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
=======
>>>>>>> 8b8e67a29324ea923f984e71316dead9411b9f95
        </Fragment>
      ) : (
        <Fragment>
          <p>No profile found, please set up your info</p>
          <Link to='/create-profile' className='btn btn-danger my-1'>
            Set up profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
