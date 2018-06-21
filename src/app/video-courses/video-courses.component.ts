import {Component, OnInit} from '@angular/core';
import {VideoCoursesService} from './video-courses.service';
import {VideoCourse} from 'videoCourse';

@Component({
  selector: 'video-courses',
  templateUrl: './video-courses.component.html',
  styleUrls: ['./video-courses.component.scss']
})
export class VideoCoursesComponent implements OnInit {

  public videoCourses: VideoCourse[];

  constructor(private videoCoursesService: VideoCoursesService) {
  }

  ngOnInit() {
    this.videoCourses = this.videoCoursesService.getVideoCoursesList();
  }
}
