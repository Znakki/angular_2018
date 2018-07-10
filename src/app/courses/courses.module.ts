import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

//components
import {CoursesListComponent} from './courses-list/courses-list.component';
import {SearchComponent} from './search/search.component';
import {CourseComponent} from './course/course.component';
import {CoursesComponent} from './courses.component';

// services
import {CoursesService} from './courses.service';

// directives
import {HighlightBorderDirective} from './highlight-border.directive';

//pipes
import {DurationPipe} from "../duration.pipe";
import { OrderByDatePipe } from './order-by-date.pipe';
import { FilterPipe } from './filter.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    CoursesListComponent,
    HighlightBorderDirective,
    CourseComponent,
    SearchComponent,
    CoursesComponent,
    DurationPipe,
    OrderByDatePipe,
    FilterPipe
  ],
  providers: [
    CoursesService,
    FilterPipe
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
