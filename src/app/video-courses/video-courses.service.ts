import {Injectable} from '@angular/core';
import {VideoCourse} from '../interfaces/video-course';

@Injectable({
  providedIn: 'root'
})
export class VideoCoursesService {

  public videoCoursesItems: VideoCourse [] = [
    {
      id: '3he3hj3hj3hj34j3h4j34h',
      title: 'ANGULAR 6',
      creation: '15/02/1990',
      duration: 60,
      description: 'FFFFFFFFFFFFFFFFFFFFFFFF'
    },
    {
      id: '1a',
      title: 'ANGULAR 6',
      creation: '15/02/1990',
      duration: 60,
      description: 'klfjgklfsdjgkldjfgklsjkljskgsj'
    },
    {
      id: '2b',
      title: 'ANGULAR 1.5 + Rails',
      creation: '15/02/1940',
      duration: 60,
      description: 'flkjgfljgfsjgsfdjgksfjgklsfdjg'
    },
    {
      id: '3c',
      title: 'PYTHON',
      creation: '15/02/1990',
      duration: 60,
      description: 'sgjkdjgfsdkjgklsfdjgkjdfgklfdjgfd'
    },
    {
      id: '4d',
      title: 'React',
      creation: '15/02/1990',
      duration: 60,
      description: 'fgfdglkfjgklfdjgklafjgkfag'
    }
  ];

  constructor() {
  }

  public getVideoCoursesList(): VideoCourse[] {
    return this.videoCoursesItems;
  }
}
