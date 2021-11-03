import { Component, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/model/recipe.model';
import { RecipesService } from 'src/app/service/recipes.service';

@Component({
  selector: 'app-recipes-read',
  templateUrl: './recipes-read.component.html',
  styleUrls: ['./recipes-read.component.css']
})
export class RecipesReadComponent implements OnInit {

   public recipes: RecipeModel [];

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe((response) => {
       this.recipes = response;
    })
  }

}
