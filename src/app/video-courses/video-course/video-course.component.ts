import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VideoCourseModel} from './video-course.model';

@Component({
  selector: 'video-course',
  templateUrl: './video-course.component.html',
  styleUrls: ['./video-course.component.scss']
})
export class VideoCourseComponent implements OnInit {

  @Input() videoCourse: VideoCourseModel;
  @Output() deleteVideoCourseEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    this.videoCourse = new VideoCourseModel(this.videoCourse);
  }

  public deleteVideoCourse(id: string): void {
    this.deleteVideoCourseEvent.emit(id);
  }
}
