<<<<<<< HEAD
import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
} from '../actions/types';
=======
import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE } from '../actions/types';
>>>>>>> 8b8e67a29324ea923f984e71316dead9411b9f95

const initalState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

export default function (state = initalState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
<<<<<<< HEAD
    case UPDATE_PROFILE:
=======
>>>>>>> 8b8e67a29324ea923f984e71316dead9411b9f95
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
<<<<<<< HEAD
        profile: payload,
=======
        error: payload,
>>>>>>> 8b8e67a29324ea923f984e71316dead9411b9f95
        loading: false,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      };
    default:
      return state;
  }
}
