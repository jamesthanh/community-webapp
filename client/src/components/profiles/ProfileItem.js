import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    major,
    location,
    skills,
  },
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>
        <p>
          {status && (
            <span>
              {status} year in {major}{' '}
            </span>
          )}
        </p>
        <p className='my-1'>{location && <span>From {location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-danger'>
          View Me!
        </Link>
      </div>
      <ul>
        {skills.slice(0, 5).map((skill, index) => (
          <li key={index} className='text-danger'>
            <i className='fas fa-check'></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
