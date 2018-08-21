import {Action} from '@ngrx/store';
import {Course} from '../interfaces/course.inteface';

export enum CoursesActionTypes {
  LOAD_COURSES = '[Courses] Load Courses',
  LOAD_COURSES_SUCCESS = '[Courses] Load Courses Success'
}


export class LoadCourses implements Action {
  readonly type = CoursesActionTypes.LOAD_COURSES;
}

export class LoadCoursesSuccess implements Action {
  readonly type = CoursesActionTypes.LOAD_COURSES_SUCCESS;

  constructor(public payload: Course[]) {
  }
}

export type CoursesActions = LoadCourses | LoadCoursesSuccess;
