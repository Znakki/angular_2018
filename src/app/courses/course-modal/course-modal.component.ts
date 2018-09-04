import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursesService} from '../courses.service';
import * as CoursesActions from '../../@store/courses/courses.action';
import {Store} from '@ngrx/store';
import {AppState} from '../../@store';
import {CourseModel} from '../course/course.model';

@Component({
  selector: 'course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.scss']
})
export class CourseModalComponent implements OnInit {

  private isNewCourse;

  public modal: FormGroup = new FormGroup(
    {
      title: new FormControl('', Validators.maxLength(50)),
      description: new FormControl('', Validators.maxLength(500)),
      creation: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.pattern('^[0-9]*$'))
    });

  constructor(private router: Router,
              private route: ActivatedRoute,
              private coursesService: CoursesService,
              private store: Store<AppState>) {
  }

  async ngOnInit() {
    this.isNewCourse = this.route.snapshot.params.id;
    if (this.isNewCourse) {
      const courseItem: CourseModel = await this.coursesService.getCourseItemById(this.isNewCourse);
      this.modal.setValue({
        title: courseItem.title,
        description: courseItem.description,
        creation: courseItem.creation,
        duration: courseItem.duration
      });
    }
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
