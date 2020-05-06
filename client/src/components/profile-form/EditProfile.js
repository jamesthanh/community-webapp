import React, { useState, Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    bio: '',
    sid: '',
    major: '',
    skills: '',
    status: '',
    location: '',
    githubusername: '',
    facebook: '',
    youtube: '',
    instagram: '',
    linkedin: '',
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      bio: loading || !profile.bio ? '' : profile.bio,
      sid: loading || !profile.sid ? '' : profile.sid,
      major: loading || !profile.major ? '' : profile.major,
      skills: loading || !profile.skills ? '' : profile.skills.join(','),
      status: loading || !profile.status ? '' : profile.status,
      location: loading || !profile.location ? '' : profile.location,
      githubusername:
        loading || !profile.githubusername ? '' : profile.githubusername,

      facebook: loading || !profile.social ? '' : profile.social.facebook,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      instagram: loading || !profile.social ? '' : profile.social.instagram,
      linkedin: loading || !profile.social ? '' : profile.social.linkedin,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const {
    bio,
    sid,
    major,
    skills,
    status,
    location,
    githubusername,
    facebook,
    youtube,
    instagram,
    linkedin,
  } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 class='large'>Update Your Profile</h1>

      <p className='lead'>
        <i className='fas fa-user'></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>

      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <textarea
            placeholder='A short bio of yourself'
            name='bio'
            value={bio}
            onChange={(e) => onChange(e)}
          ></textarea>
          <small className='form-text'>
            Your Bio or some interesting things !
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* RMIT ID'
            name='sid'
            value={sid}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>Your RMIT ID</small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='Your major'
            name='major'
            value={major}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>Like Software Engineering?</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Your Skills'
            name='skills'
            value={skills}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Please use comma separated values (eg.
            WebDev,DataScience,Nodejs,PHP)
          </small>
        </div>
        <div
          className='form-group'
          value={status}
          onChange={(e) => onChange(e)}
        >
          <select name='status' value={status} onChange={(e) => onChange(e)}>
            <option value='0'>* Please select your status?</option>
            <option value='Freshman'>Freshman</option>
            <option value='Sophomore'>Sophomore</option>
            <option value='Junior'>Junior</option>
            <option value='Senior'>Senior</option>
            <option value='Graduated'>Graduated</option>
            <option value='Expert in a field'>Expert in a field</option>
            <option value='Other'>Others</option>
          </select>
          <small className='form-text'>Give us an idea of who you are.</small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Location suggested (eg. Quan 7, HCM, VN)
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='Github Username'
            name='githubusername'
            value={githubusername}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            if your have, please include your github username
          </small>
        </div>

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Add your social info, click to view.
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x'></i>
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x'></i>
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x'></i>
              <input
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x'></i>
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type='submit' className='btn btn-danger my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
