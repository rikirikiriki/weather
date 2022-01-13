import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './commponents/home/home.component';
import {FavoritesComponent} from './commponents/favorites/favorites.component';


const routes: Routes = [
  
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "favorites",
    component: FavoritesComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "*",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
