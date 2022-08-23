import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FastFoodMenuComponent } from "./fast-food-menu-wrapper/fast-food-menu.component";

const routes: Routes = [
  { path: '', component: FastFoodMenuComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FastFoodMenuRoutingModule {
}
