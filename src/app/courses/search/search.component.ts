import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public videoCourseName: string;
  @Output() videoCourseNameEmitEvent = new EventEmitter<string>();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public findCourseInput(value: string): void {
    this.videoCourseNameEmitEvent.emit(value);
  }

  public openCourseModal() {
    this.router.navigate(['/courses/modal']);
  }
}
