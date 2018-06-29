import {Course} from '../../interfaces/course.inteface';


export class CourseModel implements Course {
  id: string;
  title: string;
  description: string;
  duration: number;
  creation: string;


  constructor(videoCourse: Course) {
    this.id = videoCourse.id;
    this.title = videoCourse.title;
    this.description = videoCourse.description;
    this.duration = videoCourse.duration;
    this.creation = videoCourse.creation;
  }

}
