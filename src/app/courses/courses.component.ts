import { Component, OnInit } from '@angular/core';
import {CoursesService} from './courses.service';
import {Course} from '../interfaces/course.inteface';
import {Id} from '../interfaces/shared.interface';

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

  constructor(private coursesService: CoursesService) { }

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

}
