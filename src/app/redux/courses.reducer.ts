import {CoursesActionTypes, CoursesActions} from './courses.action';

const initialState = {
  courses: []
};

export function coursesReducer(state = initialState, action: CoursesActions) {
  console.log(`Reducer: Action came in! ${action.type}`);

  switch (action.type) {
    case CoursesActionTypes.LOAD_COURSES:
      return {
        ...state,
      };

    case CoursesActionTypes.LOAD_COURSES_SUCCESS:
      console.log('LOAD_COURSES_SUCCESS being handled!');
      return {
        ...state,
        courses: [...action.payload]
      };

    default:
      return state;

  }

}
