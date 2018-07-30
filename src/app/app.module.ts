import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LogoComponent} from './logo/logo.component';
import {BreadcrumpsComponent} from './breadcrumps/breadcrumps.component';
import {CoursesModule} from './courses/courses.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CoursesComponent} from './courses/courses.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginResolver} from './login/login.resolver';
import {CourseModalComponent} from './courses/course-modal/course-modal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {CoursesResolver} from './courses/courses.resolver';
import {AuthGuard} from './auth.guard';

const appRoutes: Routes = [
  {
    path: 'login', component: LoginComponent,
    resolve: {
      login: LoginResolver
    }
  },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  {
    path: 'courses', component: CoursesComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    resolve: {
      courses: CoursesResolver
    },
    children: [
      {
        path: 'new',
        component: CourseModalComponent
      },
      {
        path: ':id',
        component: CourseModalComponent
      },
    ]
  }, {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    BreadcrumpsComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CoursesModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [LoginResolver,CoursesResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
