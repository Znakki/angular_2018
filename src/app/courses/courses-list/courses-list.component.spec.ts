import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent} from './courses-list.component';
import {CoursesService} from '../courses.service';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    const coursesItems = {coursesItems: jasmine.createSpy('coursesItems')};
    TestBed.configureTestingModule({
      declarations: [ CoursesListComponent ],
      providers: [{provide: CoursesService , useValue: coursesItems}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
