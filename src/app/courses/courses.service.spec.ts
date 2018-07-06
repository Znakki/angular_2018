import {CoursesService} from './courses.service';
import {Course} from "../interfaces/course.inteface";

describe('CoursesService', () => {
  let coursesService: CoursesService;

  beforeEach(() => {
    coursesService = new CoursesService();
  });

  it('should create an instance', () => {
    expect(coursesService).toBeTruthy();
  });

  it('should get the courses list =  5 ', () => {
    coursesService.getVideoCoursesList();
    const mockedCountLength: number = 5;
    expect(coursesService.coursesItems.length).toEqual(mockedCountLength);
  });

  it('should find desired course object using getCourseItemById method ', () => {
    const mockedId: string = '3he3hj3hj3hj34j3h4j34h';
    const mockedObject: Course = {
      id: '3he3hj3hj3hj34j3h4j34h',
      title: 'ANGULAR 6',
      creation: '15/02/1990',
      duration: 60,
      description: 'FFFFFFFFFFFFFFFFFFFFFFFF FFFFFFFFFFFFFF'
    };
    expect(coursesService.getCourseItemById(mockedId)).toEqual(mockedObject);
  });
});
