import * as heroActions from '../actions/heroes.action';
import { Hero } from '../../models/hero.model';

export interface HeroesState {
  entities: { [id: number]: Hero };
  loaded: boolean;
  loading: boolean;
  heroDetail: Hero;
}

export const initialState: HeroesState = {
  entities: {},
  loaded: false,
  loading: false,
  heroDetail: new Hero,
};

export function reducer(
  state = initialState,
  action: heroActions.HeroesAction
): HeroesState {
  switch (action.type) {
    case heroActions.LOAD_HEROES: {
      return {
        ...state,
        loading: true,
      };
    }

    case heroActions.LOAD_HEROES_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false,
        entities: action.payload.reduce(
          (entities: { [id: number]: Hero }, hero: Hero) => {
            return {
              ...entities,
              [hero.id]: hero,
            };
          },
          {
            ...state.entities,
          }
        ),
      };
    }

    case heroActions.LOAD_HEROES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case heroActions.ADD_HERO_SUCCESS: {
      return {
        ...state,
        entities: {
          [action.payload.id]: action.payload,
          ...state.entities
        },
      };
    }

    case heroActions.DELETE_HERO_SUCCESS: {
      const { [action.payload.id]: removed, ...entities } = state.entities;
      return {
        ...state,
        entities,
      };
    }
  }

  return state;
}

export const getHeroesLoading = (state: HeroesState) => state.loading;
export const getHeroesLoaded = (state: HeroesState) => state.loaded;
export const getHeroEntities = (state: HeroesState) => state.entities;
export const getHeroDetail = (state: HeroesState) => state.heroDetail;
