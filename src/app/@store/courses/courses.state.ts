import {CourseModel} from '../../courses/course/course.model';

export interface CoursesState {
  data: ReadonlyArray<CourseModel>;
  readonly loading: boolean;
  readonly loaded: boolean;
}

export const initialTasksState: CoursesState = {
  data: [],
  loading: false,
  loaded: false
};

