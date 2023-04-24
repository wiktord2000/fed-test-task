import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [AppComponent, CategoryCardComponent],
  imports: [BrowserModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
