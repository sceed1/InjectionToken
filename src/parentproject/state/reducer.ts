import { createReducer } from "@ngrx/store";

export const myFeature = 'myfeature';
export const testReducer = createReducer(
  { username: 'blafasel'});

export const blafaselFeature = 'myBlafasel'
export const blafaselReducer = createReducer(
  { 
    blafasel: 'asdf',
    other: 123
  } );
