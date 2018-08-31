import {Injectable} from '@angular/core';
import {Course} from '../interfaces/course.inteface';
import {Id} from '../interfaces/shared.interface';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {v4 as uuid} from 'uuid';
import {CoursesState} from '../@store/courses';
import {Store} from '@ngrx/store';

const BASE_URL = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  constructor(private http: HttpClient, private store: Store<CoursesState>) {
  }

  public defaultCount: number = 4;

  public defaultStart: number = 0;

  public getCoursesList(start = this.defaultStart, count = this.defaultCount): Observable<Course[]> {
    // @ts-ignore
    return this.http.get<Course[]>(`${BASE_URL}`, {params: { start, count}});
  }

  public async getCourseItemById(id: Id): Promise<Course> {
    const data = await this.getCoursesList().toPromise();
    return data.find(courseItem => courseItem.id === id);
  }

  public deleteCourse(id: string): Observable<Course> {
    return this.http.delete<Course>(`${BASE_URL}/${id}`);
  }

  public getCoursesWithParams(textFragment: string, count: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${BASE_URL}`, {params: {textFragment, count}});
  }

  public updateCourseItem(id: Id, values: Object = {}) {
    const courseItem = this.getCourseItemById(id);
    return !!courseItem ? {
      ...courseItem,
      ...values
    } : null
  }

  public createCourseItem(courseObject): Observable<Course> {
    const courseItem = Object.assign({}, courseObject, {id: uuid()});
    return this.http.post<Course>(`${BASE_URL}`, courseItem);
  }

}
