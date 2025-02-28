// reducers.js
import { SET_USER, SET_COURSES } from './actions';

const initialState = {
  user: null,
  courses: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
