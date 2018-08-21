import {Component, OnInit} from '@angular/core';
import {CoursesService} from './courses.service';
import {Course} from '../interfaces/course.inteface';
import {Id} from '../interfaces/shared.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {FilterPipe} from './filter.pipe';
import {AppService} from '../app.service';
import {select, Store} from '@ngrx/store';
import {AppState} from '../redux/app.state';
import * as CoursesActions from '../redux/courses.action';

const DEFAULT_LOAD_COUNT = '10';

let start = 6;
let oldStart = start;
let count = 12;

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courseData: Course[];
  public courseData$;
  public countToLoad: string = DEFAULT_LOAD_COUNT;

  constructor(private coursesService: CoursesService,
              private _filterPipe: FilterPipe,
              private appService: AppService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.init();
  }

  private async init() {
    this.appService.isSpinnerChecked(true);
    this.store.dispatch(new CoursesActions.LoadCourses());
    this.courseData$ = this.store.pipe(select('coursesPage'));
    this.appService.isSpinnerChecked(false);
  }

  public courseWasDeleted(id: Id): void {
    console.log(id, 'was removed');
    this.init();
  }

  public async loadMoreCourseItems() {
    this.appService.isSpinnerChecked(true);
    const loadMoreData = await this.coursesService.getCoursesList(start, count);
    start = count;
    count = oldStart + count;
    this.store.select('coursesPage').subscribe(({courses}) => {
      this.courseData = this.courseData.concat(courses);
    });
    this.appService.isSpinnerChecked(false);

  }

  public getSearchInput(courseInputValue: string): void {
    this.appService.isSpinnerChecked(true);
    this.coursesService.getCoursesWithParams(courseInputValue, this.countToLoad).subscribe((res: Course[]) => {
        this.courseData = res;
        this.courseData = this._filterPipe.transform(this.courseData, courseInputValue);
        this.appService.isSpinnerChecked(false);

      },
      (error: HttpErrorResponse) => console.log(error)
    );
  }

}
