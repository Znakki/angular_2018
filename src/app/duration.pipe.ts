import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    return value >= 60 ? `${(value / 60).toFixed()}h ${value % 60} min` : `${value} min`;
  }


}
