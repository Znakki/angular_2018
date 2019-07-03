import {CoursesActionTypes, CoursesActions} from './courses.action';
import {CoursesState, initialTasksState} from './courses.state';
import {CourseModel} from '../../courses/course/course.model';

export function coursesReducer(state = initialTasksState, action: CoursesActions): CoursesState {
  console.log(`Reducer: Action came in! ${action.type}`);

  switch (action.type) {

    case CoursesActionTypes.LOAD_COURSES_BY_PARAMS:
      console.log('LOAD_COURSES_BY_PARAMS being handled!');
      return {
        ...state,
        loading: true
      };

    case CoursesActionTypes.LOAD_COURSES_BY_PARAMS_SUCCESS:
      console.log('LOAD_COURSES_BY_PARAMS_SUCCESS being handled!');
      return {
        ...state,
        data: [...action.payload],
        loaded: true,
        loading: false
      };

    case CoursesActionTypes.CREATE_COURSE:
      console.log('CREATE_COURSE being handled!');
      return {
        ...state
      };

    case CoursesActionTypes.CREATE_COURSE_SUCCESS:
      console.log('CREATE_COURSE_SUCCESS being handled!');
      // @ts-ignore
      const task = {...<CourseModel>action.payload};
      // @ts-ignore
      const data = [...state.data, task];
      return {
        ...state,
        data
      };

    case CoursesActionTypes.LOAD_COURSES:
      return {
        ...state,
        loading: true
      };

    case CoursesActionTypes.LOAD_COURSES_SUCCESS:
      console.log('LOAD_COURSES_SUCCESS being handled!');
      return {
        ...state,
        data: [...action.payload],
        loaded: true,
        loading: false
      };

    case CoursesActionTypes.LOAD_MORE_COURSES:
      return {
        ...state,
        loading: true
      };

    case CoursesActionTypes.LOAD_MORE_COURSES_SUCCESS:
      console.log('LOAD_MORE_COURSES_SUCCESS being handled!');
      return {
        data: state.data.concat(action.payload),
        loaded: true,
        loading: false
      };

    case CoursesActionTypes.DELETE_COURSE_ITEM:
      console.log('DELETE_COURSE_ITEM being handled!');
      return {
        ...state
      };

    case CoursesActionTypes.DELETE_COURSE_ITEM_SUCCESS:
      console.log('DELETE_COURSE_ITEM_SUCCESS being handled!');
      const courseItem = {...(<CourseModel>action.payload)};
      // @ts-ignore
      const data = state.data.filter(c => c.id !== courseItem.id);
      return {
        ...state,
        data
      };

    default:
      return state;

  }

}

