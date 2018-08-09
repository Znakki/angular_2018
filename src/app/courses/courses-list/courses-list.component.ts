import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Id} from '../../interfaces/shared.interface';
import {Course} from '../../interfaces/course.inteface';
import {CoursesService} from '../courses.service';
import {FilterPipe} from '../filter.pipe';
import {HttpErrorResponse} from '@angular/common/http';

const DEFAULT_LOAD_COUNT = '10';


@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit {

  @Input() courses: Course[];
  @Output() deletedVideoCourseEvent = new EventEmitter<Id>();
  public countToLoad: string = DEFAULT_LOAD_COUNT;

  constructor(private coursesService: CoursesService, private _filterPipe: FilterPipe) {

  }

  ngOnInit() {
  }

  public async deleteCourseItem(courseID: Id) {
    const isRemoveCourse = confirm('Do you wanna remove this course? PLease confirm it');
    if (isRemoveCourse) {
      this.coursesService.deleteCourse(courseID).subscribe(() => {
        this.deletedVideoCourseEvent.emit(courseID);
        console.log('course id ', courseID);
      });
    }
  }

  public getSearchInput(courseInputValue: string): void {
    this.coursesService.getCoursesWithParams(courseInputValue, this.countToLoad).subscribe((res: Course[]) => {
        this.courses = res;
        this.courses =  this._filterPipe.transform(this.courses, courseInputValue);
      },
      (error: HttpErrorResponse) => console.log(error)
    );
  }

  public  async editCourseItem(courseId: string) {
    console.log(courseId);
  }

}
