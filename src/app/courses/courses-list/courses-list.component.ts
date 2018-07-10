import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Id} from '../../interfaces/shared.interface';
import {Course} from '../../interfaces/course.inteface';
import {CoursesService} from '../courses.service';
import {FilterPipe} from "../filter.pipe";

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  public courses: Course[];
  @Input() coursesList: Course[];
  @Output() deletedVideoCourseEvent = new EventEmitter<Id>();

  constructor(private coursesService: CoursesService, private _filterPipe: FilterPipe) {

  }

  ngOnInit() {
    this.courses = this.coursesList;
  }

  public deleteCourseItem(course: Course) {
    const courseItem: Course = this.coursesService.getCourseItemById(course.id);
    this.deleteCourseById(courseItem.id);
    this.deletedVideoCourseEvent.emit(courseItem.id);
    console.log('course id ', courseItem.id);
  }

  private deleteCourseById(id: Id): void {
    this.courses = this.courses
      .filter(courseItem => courseItem.id !== id);
  }

  public loadMoreCourseItems(): void {
    console.log('LOAD WORKS IS WORKED');
    // TODO observable should be used for this action
    this.courses = this.courses.concat(this.courses);
  }

  public getSearchInput(courseInputValue: string) {
    this.courses = this._filterPipe.transform(this.coursesList, courseInputValue);
  }

}
