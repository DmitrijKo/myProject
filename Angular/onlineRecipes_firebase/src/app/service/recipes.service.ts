import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Ingredients, RecipeModel } from '../model/recipe.model';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private authorizationService: AuthorizationService, private http: HttpClient) { }

  getRecipes(){
   return this.http.get<{[key:string]:RecipeModel}>("https://onlinerecipes-b9192-default-rtdb.europe-west1.firebasedatabase.app/recipes.json")
   .pipe(map((responseData)=>{
     const recipe: RecipeModel[]=[];
     for(const key in responseData){
      recipe.push({...responseData[key], id:key});
     }
     return recipe;
   }));
 }

  getRecipe(id: string) {
    return this.http.get<RecipeModel>("https://onlinerecipes-b9192-default-rtdb.europe-west1.firebasedatabase.app/recipes/"+id+".json")
 }

  postRecipes(description:string, name: string, ingredients:Ingredients[]){
    const recipe=new RecipeModel(name, description, this.authorizationService.user.email, this.authorizationService.user.id, ingredients);

    return this.http.post<{name:string}>("https://onlinerecipes-b9192-default-rtdb.europe-west1.firebasedatabase.app/recipes.json", recipe,
     {
       params:new HttpParams().set('auth', this.authorizationService.user.token)
     }
    );
 }

}
