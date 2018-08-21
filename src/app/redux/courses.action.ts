import {Action} from '@ngrx/store';

export namespace COURSE_ACTION {
  export const LOAD_COURSES = 'LOAD_COURSES';
}


export class LoadCourses implements Action {
  readonly type = COURSE_ACTION.LOAD_COURSES;
}
