import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './contract';
import { myFeature } from './reducer';

const myFeatureSelector = createFeatureSelector<State['myfeature']>(myFeature);

export const userSelector = createSelector(myFeatureSelector, (s) => s.username);

