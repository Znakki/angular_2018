import { Component } from '@angular/core';
import {Id} from './interfaces/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  videoCourseWasSelected(id: Id): void {
    console.log('VideoCourse was deleted: ', id);
  }
}
