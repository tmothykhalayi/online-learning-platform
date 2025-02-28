// actions.js
export const SET_USER = "SET_USER";
export const SET_COURSES = "SET_COURSES";

// Example action creators
export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const setCourses = (courses) => {
  return {
    type: SET_COURSES,
    payload: courses,
  };
};
