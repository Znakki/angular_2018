import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
 public videoCourseName: string;
 @Output() videoCourseNameEmitEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  public findCourseInput(value: string): void {
    this.videoCourseNameEmitEvent.emit(value);
  }
}
