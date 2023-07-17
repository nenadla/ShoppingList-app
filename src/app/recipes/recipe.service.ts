import { Injectable } from '@angular/core';


import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {



    private recipes: Recipe[] = [
        new Recipe(
        'A Tasty Schnitzel', 
        'A super tasty Schnitzel - just awsome!', 
        'https://mydinner.co.uk/wp-content/uploads/2022/02/cordon-blue-schnitzel-1.jpg', 
        [
            new Ingredient('Meat', 1),
            new Ingredient ('French Fries', 20)
        ]),
        new Recipe(
        'A Big Fat Burger', 
        'What else you need to say?', 
        'https://cdn-cmjom.nitrocdn.com/FpMsHpAgoVrRMnuAdmBhGkyiizdsWlSU/assets/images/optimized/rev-dd2c928/wp-content/uploads/2020/07/fatburger_0001_DoubleFatCheese-541x633.png',
        [
            new Ingredient('Meat', 1),
            new Ingredient ('Buns', 2)
        ]),
      ];

      constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }
    

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

}