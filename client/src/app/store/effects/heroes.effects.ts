import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Hero } from '../../models/hero.model';

import * as heroActions from '../actions';
import * as heroService from '../../services/hero.service';

@Injectable()
export class HeroesEffects {
  constructor(
    private actions$: Actions,
    private fromHeroService: heroService.HeroService
  ) {}

  @Effect()
  loadHeroes$ = this.actions$.ofType(heroActions.LOAD_HEROES).pipe(
    switchMap(() => {
      return this.fromHeroService
        .getHeroes()
        .pipe(
          map(heroes => new heroActions.LoadHeroesSuccess(heroes)),
          catchError(error => of(new heroActions.LoadHeroesFail(error)))
        );
    })
  );

  @Effect()
  addHero$ = this.actions$.ofType(heroActions.ADD_HERO).pipe(
    map((action: heroActions.AddHero) => action.payload),
    switchMap(heroToAdd => {
      return this.fromHeroService
        .addHero({ name: heroToAdd } as Hero)
        .pipe(
          map(heroCreated => new heroActions.AddHeroSuccess(heroCreated)),
          catchError(error => of(new heroActions.AddHeroFail(error)))
        );
    })
  );

  @Effect()
  deleteHero$ = this.actions$.ofType(heroActions.DELETE_HERO).pipe(
    map((action: heroActions.DeleteHero) => action.payload),
    switchMap(heroToDelete => {
      return this.fromHeroService
        .deleteHero(heroToDelete)
        .pipe(
          map(() => new heroActions.DeleteHeroSuccess(heroToDelete)),
          catchError(error => of(new heroActions.DeleteHeroFail(error)))
        );
    })
  );

  @Effect()
  loadHero$ = this.actions$.ofType(heroActions.LOAD_HERO).pipe(
    map((action: heroActions.LoadHero) => action.payload),
    switchMap(heroIdToLoad => {
      return this.fromHeroService
        .getHero(heroIdToLoad)
        .pipe(
          map(hero => new heroActions.LoadHeroSuccess(hero)),
          catchError(error => of(new heroActions.LoadHeroesFail(error)))
        );
    })
  );
}
