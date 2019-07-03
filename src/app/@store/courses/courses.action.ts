import {Action} from '@ngrx/store';
import {CourseModel} from '../../courses/course/course.model';
import {Course} from '../../interfaces/course.inteface';

export enum CoursesActionTypes {
  LOAD_COURSES = '[Courses] Load Courses',
  LOAD_COURSES_SUCCESS = '[Courses] Load Courses Success',
  EDIT_COURSE_ITEM = '[Courses] Edit Course item',
  DELETE_COURSE_ITEM = '[Courses] Delete Course item',
  DELETE_COURSE_ITEM_SUCCESS = '[Courses] Delete Course item Success',
  LOAD_MORE_COURSES = '[Courses] Load More Courses',
  LOAD_MORE_COURSES_SUCCESS = '[Courses] Load More Courses Success',
  CREATE_COURSE = '[Courses] Create Course',
  CREATE_COURSE_SUCCESS = '[Courses] Create Course Success',
  LOAD_COURSES_BY_PARAMS = '[Courses] Load Courses By Params',
  LOAD_COURSES_BY_PARAMS_SUCCESS = '[Courses] Load Courses By Params Success',
}


export class LoadCourses implements Action {
  readonly type = CoursesActionTypes.LOAD_COURSES;
}

export class LoadCoursesByParams implements Action {
  readonly type = CoursesActionTypes.LOAD_COURSES_BY_PARAMS;
  constructor(public payload:string) {
  }
}

export class LoadCoursesByParamsSuccess implements Action {
  readonly type = CoursesActionTypes.LOAD_COURSES_BY_PARAMS_SUCCESS;

  constructor(public payload: Course[]) {
  }
}

export class CreateCourse implements Action {
  readonly type = CoursesActionTypes.CREATE_COURSE;
  constructor(public payload: CourseModel[]) {
  }
}

export class CreateCourseSuccess implements Action {
  readonly type = CoursesActionTypes.CREATE_COURSE_SUCCESS;
  constructor(public payload: CourseModel[]) {
  }
}

export class LoadCoursesSuccess implements Action {
  readonly type = CoursesActionTypes.LOAD_COURSES_SUCCESS;

  constructor(public payload: CourseModel[]) {
  }
}

export class LoadMoreCourses implements Action {
  readonly type = CoursesActionTypes.LOAD_MORE_COURSES;
}

export class LoadMoreCoursesSuccess implements Action {
  readonly type = CoursesActionTypes.LOAD_MORE_COURSES_SUCCESS;

  constructor(public payload: CourseModel[]) {
  }
}

export class EditCourseItem implements Action {
  readonly type = CoursesActionTypes.EDIT_COURSE_ITEM;

  constructor(public payload: CourseModel) {
  }
}

export class DeleteCourseItem implements Action {
  readonly type = CoursesActionTypes.DELETE_COURSE_ITEM;

  constructor(public payload: CourseModel) {
  }
}

export class DeleteCourseItemSuccess implements Action {
  readonly type = CoursesActionTypes.DELETE_COURSE_ITEM_SUCCESS;

  constructor(public payload: CourseModel) {
  }
}

export type CoursesActions =
    LoadCourses
  | LoadCoursesSuccess
  | LoadMoreCoursesSuccess
  | LoadMoreCourses
  | DeleteCourseItem
  | DeleteCourseItemSuccess
  | EditCourseItem
  | CreateCourse
  | CreateCourseSuccess
  | LoadCoursesByParams
  | LoadCoursesByParamsSuccess
;
