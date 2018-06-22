import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from "./material.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VideoCoursesComponent } from './video-courses/video-courses.component';
import { VideoCourseComponent } from './video-courses/video-course/video-course.component';
import { LogoComponent } from './logo/logo.component';
import { SearchComponent } from './video-courses/search/search.component';
import { BreadcrumpsComponent } from './breadcrumps/breadcrumps.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VideoCoursesComponent,
    VideoCourseComponent,
    LogoComponent,
    SearchComponent,
    BreadcrumpsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
