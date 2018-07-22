import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

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

  constructor() {
  }

  ngOnInit() {
  }

  public saveData() {
    console.log('save Data works!');
  }

}
