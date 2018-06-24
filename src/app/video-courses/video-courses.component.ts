import {Component, OnInit} from '@angular/core';
import {VideoCoursesService} from './video-courses.service';
import {VideoCourse} from '../interfaces/video-course';

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

  public deleteCourseItem(id: string) {
    const courseItem: VideoCourse = this.videoCoursesService.getCourseItemById(id);
    this.deleteCourseById(courseItem.id);
    console.log('course id ', courseItem.id);
  }

  private deleteCourseById(id: string): void {
    this.videoCourses = this.videoCourses
      .filter(courseItem => courseItem.id !== id);
  }

  public loadMoreCourseItems(): void {
    console.log('LOAD WORKS IS WORKED');
    // TODO observable should be used for this action
    this.videoCourses =  this.videoCourses.concat(this.videoCourses);
  }

}
