import { Component } from '@angular/core';
import { Category } from './types';
import { CATEGORIES } from './categories-data';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  categories: Category[] = CATEGORIES;
  isMobile$ = this.breakpointObserver.observe(['(max-width: 500px)']).pipe(
    map((value) => value.matches),
    distinctUntilChanged()
  );
  constructor(private breakpointObserver: BreakpointObserver) {}
}
