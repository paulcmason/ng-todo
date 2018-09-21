import {
  ActionReducerMap,
  createSelector,
} from '@ngrx/store';

import * as heroReducer from './heroes.reducer';

export interface AppState {
  heroes: heroReducer.HeroesState;
}

export const reducers: ActionReducerMap<AppState> = {
  heroes: heroReducer.reducer,
};
