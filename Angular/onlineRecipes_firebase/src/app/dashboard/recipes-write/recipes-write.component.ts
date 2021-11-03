import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Ingredients } from 'src/app/model/recipe.model';
import { RecipesService } from 'src/app/service/recipes.service';

@Component({
  selector: 'app-recipes-write',
  templateUrl: './recipes-write.component.html',
  styleUrls: ['./recipes-write.component.css'],
})
export class RecipesWriteComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, Validators.required),
      ingredients: new FormArray([])
    });
  }

  onPostRecipe(forma: NgForm) {
    console.log(this.reactiveForm.value);
    const ingredients:Ingredients[]=[];
    this.reactiveForm.value.ingredients.forEach((name:string)=>{
      ingredients.push(new Ingredients(name));
    });
    this.recipesService
      .postRecipes(
        this.reactiveForm.value.description,
        this.reactiveForm.value.name,
        ingredients
      )
      .subscribe((response) => {
        console.log(response);
        this.reactiveForm.reset();
      });
  }

  getIngredientsForm() {
     return this.reactiveForm.get('ingredients') as FormArray;
  }

  addInput() {
     const input = new FormControl();
     this.getIngredientsForm().push(input);
  }
}
