import {Injectable} from '@angular/core';
import {Course} from "../interfaces/course.inteface";
import {Id} from "../interfaces/shared.interface";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  public coursesItems: Course [] = [
    {
      id: '3he3hj3hj3hj34j3h4j34h',
      title: 'Angular 6',
      creation: '2018-05-13',
      duration: 60,
      description: 'FFFFFFFFFFFFFFFFFFFFFFFF FFFFFFFFFFFFFF',
      topRated: true
    },
    {
      id: '1a',
      title: 'Angular 4',
      creation: '2019-05-20',
      duration: 60,
      description: 'klfjgklfsdjgkldjfgklsjkljskgsj',
      topRated: false
    },
    {
      id: '2b',
      title: 'Angular 1.5 + Rails',
      creation: '2018-09-15',
      duration: 60,
      description: 'flkjgfljgfsjgsfdjgksfjgklsfdjg',
      topRated: true
    },
    {
      id: '3c',
      title: 'Python',
      creation: '2018-06-31',
      duration: 60,
      description: 'sgjkdjgfsdkjgklsfdjgkjdfgklfdjgfd',
      topRated: false
    },
    {
      id: '4d',
      title: 'React',
      creation: '2017-04-20',
      duration: 60,
      description: 'fgfdglkfjgklfdjgklafjgkfag',
      topRated: false
    }
  ];

  constructor() {
  }

  public getVideoCoursesList(): Course[] {
    return this.coursesItems;
  }

  public getCourseItemById(id: Id): Course {
    return this.coursesItems
      .filter(courseItem => courseItem.id === id)
      .pop();
  }
}
