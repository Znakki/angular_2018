import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursesService} from '../courses.service';
import * as CoursesActions from '../../@store/courses/courses.action';
import {Store} from "@ngrx/store";
import {AppState} from "../../@store";

@Component({
  selector: 'course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.scss']
})
export class CourseModalComponent implements OnInit {

  private isNewCourse;

  public modal: FormGroup = new FormGroup(
    {
      title: new FormControl(),
      description: new FormControl(),
      creation: new FormControl(),
      duration: new FormControl()
    });

  constructor(private router: Router, private route: ActivatedRoute, private coursesService: CoursesService, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.isNewCourse = this.route.snapshot.params.id;
  }

  public saveData() {
    const modalValue = this.modal.value;
    this.isNewCourse ? this.coursesService.updateCourseItem('someValue') : this.store.dispatch(new CoursesActions.CreateCourse(modalValue));
  }

  public cancelChanges() {
    console.log('cancel changes works!');
    this.router.navigate(['/courses']);
  }

}
