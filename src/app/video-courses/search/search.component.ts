import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
 public videoCourseName: string;

  constructor() {
  }

  ngOnInit() {
  }

  public logCourseValue (value: string): void {
    console.log(value);
  }
}
