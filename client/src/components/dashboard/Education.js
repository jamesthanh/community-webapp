import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td className='hide-sm'>{edu.school}</td>
      <td className='hide-sm'>{edu.status}</td>
      <td className='hide-sm'>{edu.location}</td>
      <td>
        <Moment format='DD/MM/YYYY'>{moment.utc(edu.from)}</Moment> -{' '}
        {edu.to === null ? (
          'Current'
        ) : (
          <Moment format='DD/MM/YYYY'>{moment.utc(edu.to)}</Moment>
        )}
      </td>
      <td>
        <button
          onClick={() => deleteEducation(edu._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className='my-2'>Your Education</h2>
      <table className='table'>
        <thead>
          <tr>
            <th> School</th>
            <th className='hide-sm'>Status</th>
            <th className='hide-sm'>Location</th>
            <th className='hide-sm'>Timeline</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
