import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.scss']
})
export class CourseModalComponent implements OnInit {


  public modal: FormGroup = new FormGroup(
    {
      title: new FormControl(),
      description: new FormControl(),
      creation: new FormControl(),
      duration: new FormControl()
    });

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public saveData() {
    console.log('save Data works!');
    this.router.navigate(['/courses']);
  }

  public cancelChanges() {
    console.log('cancel changes works!');
    this.router.navigate(['/courses']);
  }

}
