import {Injectable} from '@angular/core';
import {Course} from "../interfaces/course.inteface";
import {Id} from "../interfaces/shared.interface";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  public coursesItems: Course [] = [
    {
      id: '1234',
      title: 'A Practical Guide to Algorithms with JavaScript',
      creation: '2018-05-13',
      duration: 45,
      description: 'Learn to solve algorithms and analyze them efficiently in both an interview setting and also in your day-to-day development.',
    },
    {
      id: '23456',
      title: 'Webpack 4 Fundamentals',
      creation: '2019-05-20',
      duration: 247,
      description: 'Learn the Webpack 4 plugin system, tour the Webpack source code and learn to build custom plugins and custom Webpack loaders.',
    },
    {
      id: '234765',
      title: 'Complete Intro to Web Development, v2',
      creation: '2018-09-15',
      duration: 67,
      description: 'More than an introduction, in this course you’ll go from building your first website to having the foundation for becoming a professional web developer!',
    },
    {
      id: '644736343',
      title: 'Testing React Applications',
      creation: '2018-06-31',
      duration: 98,
      description: 'Fix errors before your app reaches the end user by writing maintainable unit test & integration tests for your React applications!',
    },
    {
      id: '3435433',
      title: 'SQL Fundamentals',
      creation: '2017-04-20',
      duration: 23,
      description: 'Learn SQL, the most popular language for storing, querying and analyzing the relational data that powers your server-side applications.',
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
