import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipesReadComponent } from './dashboard/recipes-read/recipes-read.component';
import { RecipesWriteComponent } from './dashboard/recipes-write/recipes-write.component';
import { RecipeDescriptionComponent } from './dashboard/recipes-read/recipe-description/recipe-description.component';
import { IngredientAddComponent } from './dashboard/recipes-write/ingredient-add/ingredient-add.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    NavigationComponent,
    DashboardComponent,
    RecipesReadComponent,
    RecipesWriteComponent,
    RecipeDescriptionComponent,
    IngredientAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
