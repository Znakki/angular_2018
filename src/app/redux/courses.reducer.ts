import {LoadCourses, COURSE_ACTION} from './courses.action';

const initialState = {
  courses: []
};

export function coursesReducer(state = initialState, action: LoadCourses) {

  switch (action.type) {
    case COURSE_ACTION.LOAD_COURSES:
    default:
      return state;

  }

}
