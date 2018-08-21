import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Id} from '../../interfaces/shared.interface';
import {Course} from '../../interfaces/course.inteface';
import {CoursesService} from '../courses.service';
import {Observable} from "rxjs";
import {AppState} from "../../redux/app.state";



@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit {

  @Input() courses: Course[];
  @Input() courses$ :Observable<AppState>;
  @Output() deletedVideoCourseEvent = new EventEmitter<Id>();

  constructor(private coursesService: CoursesService) {

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

  public  async editCourseItem(courseId: string) {
    console.log(courseId);
  }

}
