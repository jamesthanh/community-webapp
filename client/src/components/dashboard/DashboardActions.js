import React from 'react';
import { Link } from 'react-router-dom';
export const DashboardActions = () => {
  return (
<<<<<<< HEAD
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-danger'></i> Edit Profile
      </Link>
      <Link to='/add-experience' className='btn btn-light'>
        <i className='fab fa-black-tie text-danger'></i> Add Experience
      </Link>
      <Link to='/add-education' className='btn btn-light'>
        <i className='fas fa-graduation-cap text-danger'></i> Add Education
=======
    <div class='dash-buttons'>
      <Link to='/edit-profile' class='btn btn-light'>
        <i class='fas fa-user-circle text-danger'></i> Edit Profile
      </Link>
      <Link to='/add-experience' class='btn btn-light'>
        <i class='fab fa-black-tie text-danger'></i> Add Experience
      </Link>
      <Link to='/add-education' class='btn btn-light'>
        <i class='fas fa-graduation-cap text-danger'></i> Add Education
>>>>>>> 8b8e67a29324ea923f984e71316dead9411b9f95
      </Link>
    </div>
  );
};
export default DashboardActions;
