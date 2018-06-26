import {VideoCourse} from '../../interfaces/video-course';


export class VideoCourseModel implements VideoCourse {
  id: string;
  title: string;
  description: string;
  duration: number;
  creation: string;


  constructor(videoCourse: VideoCourse) {
    this.id = videoCourse.id;
    this.title = videoCourse.title;
    this.description = videoCourse.description;
    this.duration = videoCourse.duration;
    this.creation = videoCourse.creation;
  }

}
