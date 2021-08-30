import { EventEmitter } from '@angular/core';

import {Recipe} from './recipe.model';

export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.kindpng.com/picc/m/235-2356386_cooking-icon-png-recipe-icon-free-vector-transparent.png'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://cdn.hellofresh.com/us/cms/gift-cards/Gift-Cards-Log-In-Image.png')
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}
