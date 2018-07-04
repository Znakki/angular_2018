import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {CoursesListComponent} from './courses-list/courses-list.component';
import {SearchComponent} from './search/search.component';
import {CourseComponent} from './course/course.component';
import {CoursesComponent} from './courses.component';


// services
import {CoursesService} from "./courses.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    CoursesListComponent,
    CourseComponent,
    SearchComponent,
    CoursesComponent
  ],
  providers: [
    CoursesService
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
