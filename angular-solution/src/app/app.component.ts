import { Component } from '@angular/core';
import { Category } from './types';
import { CATEGORIES } from './categories-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  categories: Category[] = CATEGORIES;
}
