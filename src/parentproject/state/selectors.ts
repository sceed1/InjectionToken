import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featurename, State } from './contract';

const featureSelector = createFeatureSelector<State['myfeature']>(featurename);
export const userSelector = createSelector(featureSelector, (s) => s.username);
