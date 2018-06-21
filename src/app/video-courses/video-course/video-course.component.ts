import {Component, Input, OnInit} from '@angular/core';
import {VideoCourse} from 'videoCourse';

@Component({
  selector: 'video-course',
  templateUrl: './video-course.component.html',
  styleUrls: ['./video-course.component.scss']
})
export class VideoCourseComponent implements OnInit {

  @Input() videoCourse: VideoCourse;

  constructor() { }

  ngOnInit() {
  }

}
