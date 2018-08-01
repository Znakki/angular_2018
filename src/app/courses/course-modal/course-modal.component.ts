import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursesService} from '../courses.service';

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

  constructor(private router: Router, private route: ActivatedRoute, private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.isNewCourse = this.route.snapshot.params.id;
  }

  public saveData() {
    const modalValue = this.modal.value;
    this.isNewCourse ? this.coursesService.updateCourseItem('someValue') : this.coursesService.createCourseItem(modalValue).subscribe(_=> this.router.navigate(['/courses']));
  }

  public cancelChanges() {
    console.log('cancel changes works!');
    this.router.navigate(['/courses']);
  }

}
