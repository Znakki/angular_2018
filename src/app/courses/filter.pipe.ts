import {Pipe, PipeTransform} from '@angular/core';
import {Course} from "../interfaces/course.inteface";

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(courseArray: Course[], value: string): any {
    return value ? courseArray.filter((item: Course) => item.description.toLowerCase().includes(value.toLowerCase()) || item.title.toLowerCase().includes(value.toLowerCase())) : courseArray;
  }

}
