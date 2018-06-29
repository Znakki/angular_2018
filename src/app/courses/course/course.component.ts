import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseModel} from "./course.model";

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() course: CourseModel;

  constructor() {
  }

  ngOnInit() {
    this.course = new CourseModel(this.course);
  }
}
