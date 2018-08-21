import {Component, OnInit} from '@angular/core';
import {CoursesService} from './courses.service';
import {Course} from '../interfaces/course.inteface';
import {Id} from '../interfaces/shared.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {FilterPipe} from './filter.pipe';
import {AppService} from '../app.service';
import {select, Store} from '@ngrx/store';
import * as CoursesActions from '../@store/courses/courses.action';
import {AppState, getCoursesData, getLoadingStatus} from '../@store';
import {Observable} from 'rxjs';

const DEFAULT_LOAD_COUNT = '10';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courseData: Course[];
  public courseData$: Observable<ReadonlyArray<Course>>;
  public countToLoad: string = DEFAULT_LOAD_COUNT;

  constructor(private coursesService: CoursesService,
              private _filterPipe: FilterPipe,
              private appService: AppService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.init();
  }

  private init() {
    this.switchSpinner();
    this.store.dispatch(new CoursesActions.LoadCourses());
    this.courseData$ = this.store.pipe(select(getCoursesData));
    this.switchSpinner();
  }

  public courseWasDeleted(id: Id): void {
    console.log(id, 'was removed');
    this.init();
  }

  public switchSpinner() {
    this.store.pipe(select(getLoadingStatus)).subscribe(status => this.appService.switchSpinner(status));

  }

  public async loadMoreCourseItems() {
    this.switchSpinner();
    this.store.dispatch(new CoursesActions.LoadMoreCourses());
    this.switchSpinner();

  }

  public getSearchInput(courseInputValue: string): void {
    this.switchSpinner();
    this.store.dispatch(new CoursesActions.LoadCoursesByParams(courseInputValue));
    this.switchSpinner();
  }

}
