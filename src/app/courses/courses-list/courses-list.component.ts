import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Id} from '../../interfaces/shared.interface';
import {Course} from '../../interfaces/course.inteface';
import {Observable} from 'rxjs';
import {CoursesState} from '../../@store/courses';
import * as CoursesActions from '../../@store/courses/courses.action';
import {Store} from "@ngrx/store";
import {CourseModel} from "../course/course.model";
import {AppState} from "../../@store";



@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit {

  @Input() courses: Course[];
  @Input() courses$: Observable<CoursesState>;
  @Output() deletedVideoCourseEvent = new EventEmitter<Id>();

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
  }

  public deleteCourseItem(course: CourseModel) {
    const isRemoveCourse = confirm('Do you wanna remove this course? PLease confirm it');
    if (isRemoveCourse) {
      this.store.dispatch(new CoursesActions.DeleteCourseItem(course));
      this.deletedVideoCourseEvent.emit(course.id);
    }
  }

  public  async editCourseItem(courseId: string) {
    console.log(courseId);
  }

}
