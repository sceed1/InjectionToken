import { NgModule } from '@angular/core';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { USER_NAME } from '../sideproject/username/token';

import { State } from './state/contract';
import { myFeature, blafaselFeature, testReducer, blafaselReducer } from './state/reducer';
import { userSelector } from './state/selectors';

export const reducers: ActionReducerMap<State> = {
  [myFeature]: testReducer,
  [blafaselFeature]: blafaselReducer,
};

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
  ],
  providers: [
    {
      provide: USER_NAME,
      useValue: userSelector,
    },
  ],
})
export class ParentModule {}


