import { Component, Input } from '@angular/core';
import { Category } from '../types';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent {
  @Input() category!: Category;
  @Input() imgPosition: 'top' | 'bottom' = 'top';
  @Input() isLiked: boolean = true;

  onLikeClick() {
    this.isLiked = !this.isLiked;
  }
}
