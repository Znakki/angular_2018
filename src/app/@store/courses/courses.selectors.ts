import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CoursesState} from './courses.state';

export const getCoursesState = createFeatureSelector<CoursesState>('courses');
export const getCoursesData = createSelector(getCoursesState,(state: CoursesState) => state.data);
export const getLoadingStatus = createSelector(getCoursesState,(state: CoursesState) => state.loading);
