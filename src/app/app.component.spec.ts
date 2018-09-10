import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Location } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterTestingModule } from "@angular/router/testing";
import { routes } from './app-routing.module';
import { Router } from '@angular/router';

describe('AppComponent', () => {

  let router: Router;
  let location: Location;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
      ],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes(routes)
      ]
    }).compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
  }));
  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Tour of Heroes'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  }));
  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('Tour of Heroes');
  }));
  it('should show the heroes component when we browse to /heroes', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    router.navigate(['heroes']).then(() => {
      expect(location.path()).toBe('/heroes');
      fixture.detectChanges();
      expect(compiled.querySelector('h2').textContent).toContain('My Heroes');
    });
  }));
});
