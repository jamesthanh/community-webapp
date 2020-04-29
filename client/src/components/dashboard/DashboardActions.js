import React from 'react';
import { Link } from 'react-router-dom';
export const DashboardActions = () => {
  return (
    <div class='dash-buttons'>
      <Link to='/edit-profile' class='btn btn-light'>
        <i class='fas fa-user-circle text-danger'></i> Edit Profile
      </Link>
      <Link to='/add-experience' class='btn btn-light'>
        <i class='fab fa-black-tie text-danger'></i> Add Experience
      </Link>
      <Link to='/add-education' class='btn btn-light'>
        <i class='fas fa-graduation-cap text-danger'></i> Add Education
      </Link>
    </div>
  );
};
export default DashboardActions;
