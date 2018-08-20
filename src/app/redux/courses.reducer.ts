import {Action} from 'rxjs/internal/scheduler/Action';
import {AddCourse, COURSE_ACTION} from './courses.action';

const initialState = {
  courses: [
    {
      id: '1234',
      title: 'A Practical Guide to Algorithms with JavaScript',
      creation: '2018-05-13',
      duration: 45,
      description: 'Learn to solve algorithms and analyze them efficiently ' +
        'in both an interview setting and also in your day-to-day development.',
      topRated: true
    },
    {
      id: '23456',
      title: 'Webpack 4 Fundamentals',
      creation: '2019-05-20',
      duration: 247,
      description: 'Learn the Webpack 4 plugin system, tour the Webpack source code and' +
        ' learn to build custom plugins and custom Webpack loaders.',
      topRated: false
    }
  ]
};

export function coursesReducer(state = initialState, action: AddCourse) {

  switch (action.type) {
    case COURSE_ACTION.ADD_COURSE:
    default:
      return state;

  }

}
