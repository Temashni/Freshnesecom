import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesPage } from './pages/categories/categories.page';
import { HomePage } from './pages/home/home.page';


const routes: Routes = [
  { path:"categories", component: CategoriesPage},
  { path: "**", component: HomePage}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
