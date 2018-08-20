import {Action} from 'rxjs/internal/scheduler/Action';

export  namespace COURSE_ACTION {
  export const ADD_COURSE = 'ADD_COURSE';
}


export class AddCourse implements Action{
  readonly type = COURSE_ACTION.ADD_COURSE;

  constructor(public payload: any){}
}
