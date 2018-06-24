import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VideoCourse} from '../../interfaces/video-course';

@Component({
  selector: 'video-course',
  templateUrl: './video-course.component.html',
  styleUrls: ['./video-course.component.scss']
})
export class VideoCourseComponent implements OnInit {

  @Input() videoCourse: VideoCourse;
  @Output() courseItemID: EventEmitter <string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClickButton() {
    console.log('******');
    this.courseItemID.emit(this.videoCourse.id);
  }

}
