import { createReducer, on } from '@ngrx/store';
import { register, login, logout } from '../actions/state.action';

export interface UserState {
  user: any;
}

export const initialState: UserState = {
  user: null,
};

export const userReducer = createReducer(
  initialState,
  on(register, (state) => ({ ...state, user: state.user })),
  on(login, (state) => ({ ...state, user: state.user })),
  on(logout, (state) => ({ ...state, user: state.user }))
);
