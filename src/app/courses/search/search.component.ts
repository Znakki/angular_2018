import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public videoCourseName: string;
  @Output() videoCourseNameEmitEvent = new EventEmitter<any>();
  public searchTerm$ = new Subject<string>();

  constructor(private router: Router) {
    this.search(this.searchTerm$);
  }

  ngOnInit() {
  }

  public openCourseModal() {
    this.router.navigate(['/courses/new']);
  }

  public search(terms: Observable<string>) {
    return terms.pipe(debounceTime(300), distinctUntilChanged()).subscribe(filter => {
      if (filter.length >= 3) {
        this.videoCourseNameEmitEvent.emit(filter);
      } else if (filter.length === 0) {
        this.videoCourseNameEmitEvent.emit(filter);
      }
    });
  }

}
