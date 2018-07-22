import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//components
import {CoursesListComponent} from './courses-list/courses-list.component';
import {SearchComponent} from './search/search.component';
import {CourseComponent} from './course/course.component';
import {CoursesComponent} from './courses.component';

// services
import {CoursesService} from './courses.service';

// directives
import {HighlightBorderDirective} from './highlight-border.directive';

// pipes
import {DurationPipe} from '../duration.pipe';
import { OrderByDatePipe } from './order-by-date.pipe';
import { FilterPipe } from './filter.pipe';
import {MaterialModule} from '../material/material.module';
import {RouterModule} from '@angular/router';
import { CourseModalComponent } from './course-modal/course-modal.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    CoursesListComponent,
    HighlightBorderDirective,
    CourseComponent,
    SearchComponent,
    CoursesComponent,
    DurationPipe,
    OrderByDatePipe,
    FilterPipe,
    CourseModalComponent
  ],
  providers: [
    CoursesService,
    FilterPipe
  ],
  exports: [
    CoursesComponent,
    MaterialModule
  ]
})
export class CoursesModule { }
