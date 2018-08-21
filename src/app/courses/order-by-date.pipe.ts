import {Pipe, PipeTransform} from '@angular/core';
import {Course} from '../interfaces/course.inteface';

@Pipe({
  name: 'orderByDate'
})
export class OrderByDatePipe implements PipeTransform {

  transform(courseData: Course[] = []): Course[] {
    if (courseData && courseData.length !== 0) {
      return courseData && courseData.sort((a: Course, b: Course) => new Date(a.creation) < new Date(b.creation) ? 1 : -1);
    }
  }

}
