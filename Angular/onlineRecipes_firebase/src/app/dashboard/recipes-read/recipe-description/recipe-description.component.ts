import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/model/recipe.model';
import { RecipesService } from 'src/app/service/recipes.service';

@Component({
  selector: 'app-recipe-description',
  templateUrl: './recipe-description.component.html',
  styleUrls: ['./recipe-description.component.css'],
})
export class RecipeDescriptionComponent implements OnInit {

   @Input() recipeData;

  public recipe: RecipeModel[];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
   //  this.recipesService.getRecipe().subscribe(response => {
   //     this.recipe = response;
   //  })
  }
}