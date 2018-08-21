import { Action } from '@ngrx/store';
import {AuthActionTypes} from './auth.action';
import {AuthState, initialAuthState} from "./auth.state";



export function authReducer(state = initialAuthState, action: Action): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        logged: true
      };
    case AuthActionTypes.LOGOUT:
      return {
        logged: false
      };
    default:
      return state;
  }
}
