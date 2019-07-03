import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CoursesService} from '../../courses/courses.service';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as CoursesActions from './courses.action';
import {switchMap, map, concatMap, pluck} from 'rxjs/operators';
import {CourseModel} from '../../courses/course/course.model';
import {Router} from '@angular/router'
import {FilterPipe} from '../../courses/filter.pipe';

@Injectable()
export class CoursesEffects {
  public startState;

  constructor(private actions$: Actions,
              private coursesService: CoursesService, private router : Router, private _filterPipe: FilterPipe) {
    this.startState = this.coursesService.defaultStart + 4;
    console.log('[TASK EFFECTS]');
  }

  @Effect() getCoursesList$: Observable<Action> = this.actions$.pipe(
    ofType<CoursesActions.LoadCourses>(CoursesActions.CoursesActionTypes.LOAD_COURSES),
    switchMap(() => this.coursesService.getCoursesList().pipe(map(courses => {
      return new CoursesActions.LoadCoursesSuccess(courses);
    }))));

  @Effect() getCoursesListByParams$: Observable<Action> = this.actions$.pipe(
    ofType<CoursesActions.LoadMoreCourses>(CoursesActions.CoursesActionTypes.LOAD_MORE_COURSES),
    switchMap(() => this.coursesService.getCoursesList(this.startState).pipe(map(courses => {
      if (courses.length) {
        this.startState += 4;
      }
      return new CoursesActions.LoadMoreCoursesSuccess(courses);
    }))));

  @Effect() deleteCourseItem$: Observable<Action> = this.actions$.pipe(
    ofType<CoursesActions.DeleteCourseItem>(CoursesActions.CoursesActionTypes.DELETE_COURSE_ITEM),
    pluck('payload'),
    concatMap((payLoad: CourseModel) => {
      return this.coursesService.deleteCourse(payLoad.id).pipe(map((_) => {
        return new CoursesActions.DeleteCourseItemSuccess(payLoad);
      }))
    }));


  @Effect() createCourse$: Observable<Action> =  this.actions$.pipe(
    ofType<CoursesActions.CreateCourse>(CoursesActions.CoursesActionTypes.CREATE_COURSE),
    pluck('payload'),
    concatMap((payload: CourseModel) => {
       return this.coursesService.createCourseItem(payload).pipe(map(_=>{
         this.router.navigate(['/courses']);
         return new CoursesActions.CreateCourseSuccess(payload);
       }))
    }))

  @Effect() getCoursesByParams$: Observable<Action> =  this.actions$.pipe(
    ofType<CoursesActions.LoadCoursesByParams>(CoursesActions.CoursesActionTypes.LOAD_COURSES_BY_PARAMS),
    pluck('payload'),
    concatMap((payload: string) => {
      return this.coursesService.getCoursesWithParams(payload, 10).pipe(map(courses=>{
         courses = this._filterPipe.transform(courses, payload);
         return new CoursesActions.LoadCoursesByParamsSuccess(courses);
      }))
    }))

}

