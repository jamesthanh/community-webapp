import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileEducation = ({
  education: { school, status, location, current, to, from, description },
}) => (
  <div>
    <h3 className='text-danger'>{school}</h3>
    <strong>Timeline: </strong>{' '}
    <Moment format='DD/MM/YYYY'>{moment.utc(from)}</Moment> -{' '}
    {!to ? ' Now' : <Moment format='DD/MM/YYYY'>{moment.utc(to)}</Moment>}
    <p>
      <strong>Status: </strong>
      {status}
      <p></p>
      <strong>Location: </strong> {location}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
