import { Action } from '@ngrx/store';

import { Hero } from '../../models/hero.model';

export const LOAD_HEROES = '[Heroes] Load Heroes';
export const LOAD_HEROES_FAIL = '[Heroes] Load Heroes Fail';
export const LOAD_HEROES_SUCCESS = '[Heroes] Load Heroes Success';
export const ADD_HERO = '[Heroes] Add Hero';
export const ADD_HERO_FAIL = '[Heroes] Add Hero Fail';
export const ADD_HERO_SUCCESS = '[Heroes] Add Hero Success';
export const DELETE_HERO = '[Heroes] Delete Hero';
export const DELETE_HERO_FAIL = '[Heroes] Delete Hero Fail';
export const DELETE_HERO_SUCCESS = '[Heroes] Delete Hero Success';
export const LOAD_HERO = '[Hero] Load Hero';
export const LOAD_HERO_FAIL = '[Hero] Load Hero Fail';
export const LOAD_HERO_SUCCESS = '[Hero] Load Hero Success';

export class LoadHero implements Action {
  readonly type = LOAD_HERO;
  constructor(public payload: number) { }
}

export class LoadHeroFail implements Action {
  readonly type = LOAD_HERO_FAIL;
  constructor(public payload: any) { }
}

export class LoadHeroSuccess implements Action {
  readonly type = LOAD_HERO_SUCCESS;
  constructor(public payload: Hero) { }
}

export class LoadHeroes implements Action {
  readonly type = LOAD_HEROES;
}

export class LoadHeroesFail implements Action {
  readonly type = LOAD_HEROES_FAIL;
  constructor(public payload: any) { }
}

export class LoadHeroesSuccess implements Action {
  readonly type = LOAD_HEROES_SUCCESS;
  constructor(public payload: Hero[]) { }
}

export class AddHero implements Action {
  readonly type = ADD_HERO;
  constructor(public payload: string) { }
}

export class AddHeroFail implements Action {
  readonly type = ADD_HERO_FAIL;
  constructor(public payload: any) { }
}

export class AddHeroSuccess implements Action {
  readonly type = ADD_HERO_SUCCESS;
  constructor(public payload: Hero) { }
}

export class DeleteHero implements Action {
  readonly type = DELETE_HERO;
  constructor(public payload: Hero) { }
}

export class DeleteHeroFail implements Action {
  readonly type = DELETE_HERO_FAIL;
  constructor(public payload: any) { }
}

export class DeleteHeroSuccess implements Action {
  readonly type = DELETE_HERO_SUCCESS;
  constructor(public payload: Hero) { }
}

export type HeroesAction =
  LoadHeroes | LoadHeroesFail | LoadHeroesSuccess |
  AddHero | AddHeroSuccess | AddHeroFail |
  DeleteHero | DeleteHeroSuccess | DeleteHeroFail |
  LoadHero | LoadHeroFail | LoadHeroSuccess;
