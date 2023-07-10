import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply test', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-853x1024.jpg'),
    new Recipe('A Testingggg Recipe', 'Simply test', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-853x1024.jpg'),
  ];



  constructor(){

  }

  ngOnInit() {
    
  }
  onRecipeSelected(recipe: Recipe){
this.recipeWasSelected.emit(recipe);
  }

}
