import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-heroes',
  styleUrls: ['./heroes.component.css'],
  template: `
    <h2>My Heroes</h2>
    <div>
      <label>Hero name:
        <input #heroName />
      </label>
      <!-- (click) passes input value to add() and then clears the input -->
      <button (click)="add(heroName.value); heroName.value=''">
        add
      </button>
    </div>
    <ul class="heroes">
      <li *ngFor="let hero of (heroes$ | async)">
        <a routerLink="/detail/{{hero.id}}">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </a>
        <button class="delete" title="delete hero" (click)="delete(hero)">x</button>
      </li>
    </ul>
  `
})
export class HeroesComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.heroes$ = this.store.select(fromStore.getAllHeroes);
    this.store.dispatch(new fromStore.LoadHeroes());
  }

  add(name: string) {
    name = name.trim();
    if (!name) { return; }
    this.store.dispatch(new fromStore.AddHero(name));
  }

  delete(hero: Hero): void {
    this.store.dispatch(new fromStore.DeleteHero(hero));
  }
}
