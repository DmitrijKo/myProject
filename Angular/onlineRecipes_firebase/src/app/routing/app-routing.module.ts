import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorizationComponent } from "../authorization/authorization.component";
import { AuthGuard } from "../authorization/authorization.guard";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { RecipeDescriptionComponent } from "../dashboard/recipes-read/recipe-description/recipe-description.component";
import { RecipesReadComponent } from "../dashboard/recipes-read/recipes-read.component";
import { RecipesWriteComponent } from "../dashboard/recipes-write/recipes-write.component";


const appRoutes:Routes=[
   { path: 'auth', component:AuthorizationComponent },
   { path: '', component:DashboardComponent, canActivate:[AuthGuard] },
   { path: 'recipes-read', component: RecipesReadComponent },
   { path: 'recipes-write', component: RecipesWriteComponent, canActivate:[AuthGuard] },
   { path: "description/:id", component: RecipeDescriptionComponent }
]

@NgModule({
   declarations: [],
   imports: [
     CommonModule,
     RouterModule.forRoot(appRoutes)
   ],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }