import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { HeroService } from '../../services/hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name | uppercase}} Details</h2>
      <div><span>id: </span>{{hero.id}}</div>
      <div>
          <label>name:
              <input [(ngModel)]="hero.name" placeholder="name" />
          </label>
      </div>
      <button (click)="save()">save</button>
      <button (click)="goBack()">go back</button>
    </div>
  `,
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<fromStore.AppState>
  ) { }

  ngOnInit(): void {
    this.getHero();
    //this.hero$ = this.store.select(fromStore.getHeroDetail)
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new fromStore.LoadHero(id));
  }

  save(): void {
    // this.heroService.updateHero(this.hero)
    //   .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
