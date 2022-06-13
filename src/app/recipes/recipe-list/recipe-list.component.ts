import { Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Dal tadka','This is simply a test maybe','https://c2.staticflickr.com/6/5134/30065852941_76d1d0a157_b.jpg'),
    new Recipe('Gulab Jamun','This is simply a test maybe','https://c1.staticflickr.com/9/8409/30001106280_676f968089_b.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
