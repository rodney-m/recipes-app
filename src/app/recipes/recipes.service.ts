import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
      ingredients : ['French fries', 'Pork meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://www.onceuponachef.com/images/2019/09/Spaghetti-and-Meatballs.jpg',
      ingredients : ['Spaghetti', 'Meat', 'Tomatoes']
    },
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes]
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe =>  recipe.id === recipeId)
    };
  }


  deleteRecipe(recipeId: string){
    console.log(this.recipes);
    this.recipes = this.recipes.filter(recipe =>   recipe.id !== recipeId );
    console.log(this.recipes);
  }

}
