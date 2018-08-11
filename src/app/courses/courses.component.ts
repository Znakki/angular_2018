import { Component, OnInit } from '@angular/core';
import {CoursesService} from './courses.service';
import {Course} from '../interfaces/course.inteface';
import {Id} from '../interfaces/shared.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {FilterPipe} from './filter.pipe';

const DEFAULT_LOAD_COUNT = '10';

let start = 6;
let oldStart =  start;
let count = 12;

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courseData: Course[];
  public countToLoad: string = DEFAULT_LOAD_COUNT;

  constructor(private coursesService: CoursesService, private _filterPipe: FilterPipe) { }

  ngOnInit() {
    this.init();
  }

  private async init() {
   this.courseData = await this.coursesService.getCoursesList().toPromise();
  }

  public courseWasDeleted(id: Id): void {
    console.log(id, 'was removed');
    this.init();
  }

  public  async loadMoreCourseItems() {
    const loadMoreData = await this.coursesService.getCoursesList(start, count).toPromise();
    start =  count;
    count = oldStart + count;
    this.courseData = this.courseData.concat(loadMoreData);
  }

  public getSearchInput(courseInputValue: string): void {
    console.log(courseInputValue);
    this.coursesService.getCoursesWithParams(courseInputValue, this.countToLoad).subscribe((res: Course[]) => {
        this.courseData = res;
        this.courseData =  this._filterPipe.transform(this.courseData, courseInputValue);
      },
      (error: HttpErrorResponse) => console.log(error)
    );
  }

}
