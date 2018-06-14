import {Component, Input, OnInit} from '@angular/core';
import {VideoCourseModel} from '../../interfaces/video-course';

@Component({
  selector: 'video-course',
  templateUrl: './video-course.component.html',
  styleUrls: ['./video-course.component.scss']
})
export class VideoCourseComponent implements OnInit {

  @Input() videoCourse: VideoCourseModel;

  constructor() { }

  ngOnInit() {
  }

}
