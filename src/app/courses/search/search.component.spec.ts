import {SearchComponent} from './search.component';
import {DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import {TestBed, ComponentFixture, async} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be presented a Add A Course Button', () => {
    fixture.detectChanges();
    const debugElement: DebugElement = fixture.debugElement;
    const addCourseButtonDebugElement = debugElement.query(By.css('section.search  button:nth-child(1)'));
    const addCourseButton = addCourseButtonDebugElement.nativeElement;

    expect(addCourseButton.textContent).toBe('ADD A COURSE');
  });
});
