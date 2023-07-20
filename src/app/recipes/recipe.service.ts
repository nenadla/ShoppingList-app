import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

      recipesChanged = new Subject<Recipe[]>();

   // private recipes: Recipe[] = [
   //     new Recipe(
   //     'A Tasty Schnitzel', 
   //     'A super tasty Schnitzel - just awsome!', 
   //   'https://mydinner.co.uk/wp-content/uploads/2022/02/cordon-blue-schnitzel-1.jpg', 
   //     [
   //         new Ingredient('Meat', 1),
   //         new Ingredient ('French Fries', 20)
   //   ]),
   //     new Recipe(
   //     'A Big Fat Burger', 
   //     'What else you need to say?', 
   //     'https://cdn-cmjom.nitrocdn.com/FpMsHpAgoVrRMnuAdmBhGkyiizdsWlSU/assets/images/optimized/rev-dd2c928/wp-content/uploads/2020/07/fatburger_0001_DoubleFatCheese-541x633.png',
   //     [
   //         new Ingredient('Meat', 1),
   //         new Ingredient ('Buns', 2)
   //     ]),
    //  ];

      private recipes: Recipe[] = [];

      constructor(private slService: ShoppingListService){}

    setRecipes(recipes: Recipe[]){
       this.recipes = recipes;
       this.recipesChanged.next(this.recipes.slice());
    }  

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }
    

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
       this.recipes.push(recipe);
       this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}