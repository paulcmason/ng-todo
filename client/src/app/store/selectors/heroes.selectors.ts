import { createSelector } from '@ngrx/store';
import * as fromRoot from '..';
import * as heroReducer from '../reducers/heroes.reducer';

export const getHeroState = (state: fromRoot.AppState) => state.heroes;

export const getHeroEntities = createSelector(getHeroState, heroReducer.getHeroEntities);
export const getAllHeroes = createSelector(getHeroEntities, entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});
export const getHeroesLoaded = createSelector(
    getHeroState,
    heroReducer.getHeroesLoaded
);
export const getHeroesLoading = createSelector(
    getHeroState,
    heroReducer.getHeroesLoading
);
export const getHeroDetail = createSelector(getHeroState, heroReducer.getHeroDetail);
