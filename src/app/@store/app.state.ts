import {CoursesState} from './courses';
import {AuthState} from "./auth";


export interface AppState {
  courses: CoursesState;
  auth: AuthState;
}
