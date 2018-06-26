import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {VideoCoursesService} from './video-courses.service';
import {VideoCourse} from '../interfaces/video-course';
import {Id} from '../interfaces/shared';

@Component({
  selector: 'video-courses',
  templateUrl: './video-courses.component.html',
  styleUrls: ['./video-courses.component.scss']
})
export class VideoCoursesComponent implements OnInit {

  public videoCourses: VideoCourse[];
  @Output() deletedVideoCourseEvent = new EventEmitter<Id>();

  constructor(private videoCoursesService: VideoCoursesService) {
  }

  ngOnInit() {
    this.videoCourses = this.videoCoursesService.getVideoCoursesList();
  }

  public deleteCourseItem(id: Id) {
    const courseItem: VideoCourse = this.videoCoursesService.getCourseItemById(id);
    this.deleteCourseById(courseItem.id);
    this.deletedVideoCourseEvent.emit(id);
    console.log('course id ', courseItem.id);
  }

  private deleteCourseById(id: Id): void {
    this.videoCourses = this.videoCourses
      .filter(courseItem => courseItem.id !== id);
  }

  public loadMoreCourseItems(): void {
    console.log('LOAD WORKS IS WORKED');
    // TODO observable should be used for this action
    this.videoCourses =  this.videoCourses.concat(this.videoCourses);
  }

}
