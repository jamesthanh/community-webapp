import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => (
  <div>
    <h3 className='text-dark'>{title}</h3>
    <strong>Timeline: </strong>{' '}
    <Moment format='YYYY/MM/DD'>{moment.utc(from)}</Moment> -{' '}
    {!to ? ' Now' : <Moment format='YYYY/MM/DD'>{moment.utc(to)}</Moment>}
    <p>
      <strong>In the course: </strong>
      {company}
      <p></p>
      <strong>Location: </strong> {location}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
