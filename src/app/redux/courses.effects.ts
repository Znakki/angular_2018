import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CoursesService} from '../courses/courses.service';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as CoursesActions from './courses.action';
import {switchMap, map} from 'rxjs/operators';

@Injectable()
export class CoursesEffects {
  constructor(private actions$: Actions,
              private coursesService: CoursesService) {
    console.log('[TASK EFFECTS]');
  }

  @Effect() getCoursesList$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActions.CoursesActionTypes.LOAD_COURSES),
    switchMap(() => this.coursesService.getCoursesList().pipe(map(courses => new CoursesActions.LoadCoursesSuccess(courses)))));

}

