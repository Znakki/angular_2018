import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseComponent} from './course.component';
import {Component} from '@angular/core';
import {Course} from '../../interfaces/course.inteface';
import {By} from '@angular/platform-browser';


@Component({
  template: `
    <div class="course-list__item-wrapper" *ngFor="let course of courses">
      <course class="course-list__item" [course]="course"></course>
      <div class="course-list__buttons">
        <button>EDIT</button>
        <button class="delete" (click)="deleteCourseItem(course)">DELETE</button>
      </div>
    </div>`
})
class TestHostComponent {
  public courses: Course [] = [
    {
    id: '3he3hj3hj3hj34j3h4j34h',
    title: 'ANGULAR 6',
    creation: '15/02/1990',
    duration: 60,
    description: 'FFFFFFFFFFFFFFFFFFFFFFFF FFFFFFFFFFFFFF'
  },
    {
      id: '1a',
      title: 'ANGULAR 6',
      creation: '15/02/1990',
      duration: 60,
      description: 'klfjgklfsdjgkldjfgklsjkljskgsj'
    },
    {
      id: '2b',
      title: 'ANGULAR 1.5 + Rails',
      creation: '15/02/1940',
      duration: 60,
      description: 'flkjgfljgfsjgsfdjgksfjgklsfdjg'
    }];

  public clickedCourse: Course;

  public deleteCourseItem(course: Course) {
    this.clickedCourse = course;
  }
}

describe('CourseComponent Test Host', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent, TestHostComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should delete first item', () => {
    fixture.detectChanges();
    const deletedCourse = {
      id: '3he3hj3hj3hj34j3h4j34h',
      title: 'ANGULAR 6',
      creation: '15/02/1990',
      duration: 60,
      description: 'FFFFFFFFFFFFFFFFFFFFFFFF FFFFFFFFFFFFFF'
    };
    const deleteButton = fixture.debugElement.query(By.css('.delete'));
    deleteButton.triggerEventHandler('click', null);
    expect(testHost.clickedCourse).toEqual(deletedCourse);
  });
});

