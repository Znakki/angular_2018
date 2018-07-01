import { Component, OnInit } from '@angular/core';
import {CoursesService} from './courses.service';
import {Course} from '../interfaces/course.inteface';
import {Id} from '../interfaces/shared.interface';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courseData: Course[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courseData = this.coursesService.getVideoCoursesList();
  }

  courseWasSelected(id: Id): void {
    console.log('Course was deleted: ', id);
  }

}
