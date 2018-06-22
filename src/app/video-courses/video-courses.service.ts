import {Injectable} from '@angular/core';
import {VideoCourse} from '../interfaces/video-course';

@Injectable({
  providedIn: 'root'
})
export class VideoCoursesService {

  public videoCoursesItems: VideoCourse [] = [
    {
      id: '3he3hj3hj3hj34j3h4j34h',
      title: 'ANGULAR',
      creation: '15/02/1990',
      duration: 60,
      description: `fjdkgdfjk dsjgkdsjgdfkjgdkjgdfk gdkg jdkgjdfk gdfksgj dfsgkjdf gdfskg jdfsgjdfk gdfsjg dfsgkdf gdf
      gdfsjgdfjgkjdfkgj dfgjdfs gkdjg df
      g dogjdfsjgdfksjgdfksjg dfskgjdfks gdfjgdfks`
    },
    {
      id: '1a',
      title: 'ANGULAR',
      creation: '15/02/1990',
      duration: 60,
      description: 'Please use mocked array of courses implemented as property of courses page components.\n' +
      'Don’t forget to use Interface of course item created previously.\n' +
      'Create item class that implements your interface.\n'
    },
    {
      id: '2b',
      title: 'ANGULAR 1.5 + Rails',
      creation: '15/02/1940',
      duration: 60,
      description: 'Please use mocked array of courses implemented as property of courses page components.\n' +
      'Don’t forget to use Interface of course item created previously.\n' +
      'Create item class that implements your interface.\n'
    },
    {
      id: '3c',
      title: 'PYTHON',
      creation: '15/02/1990',
      duration: 60,
      description: 'Please use mocked array of courses implemented as property of courses page components.\n' +
      'Don’t forget to use Interface of course item created previously.\n' +
      'Create item class that implements your interface.\n'
    },
    {
      id: '4d',
      title: 'React',
      creation: '15/02/1990',
      duration: 60,
      description: 'Please use mocked array of courses implemented as property of courses page components.\n' +
      'Don’t forget to use Interface of course item created previously.\n' +
      'Create item class that implements your interface.\n'
    }
  ];

  constructor() {
  }

  public getVideoCoursesList(): VideoCourse[] {
    return this.videoCoursesItems;
  }
}
