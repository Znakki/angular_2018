import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'breadcrumps',
  templateUrl: './breadcrumps.component.html',
  styleUrls: ['./breadcrumps.component.scss']
})
export class BreadcrumpsComponent implements OnInit {
  public  name: any;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
     this.route.queryParams
      .subscribe(params => {
        this.name = params.title;
      });
  }

}
