import { NgModule } from '@angular/core';
import { SpecialEventComponent } from './special-event/special-event.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { DishCardComponent } from './dish-card/dish-card.component';
import { DishCriteriaComponent } from './dish-criteria/dish-criteria.component';
import { FastFoodMenuComponent } from './fast-food-menu-wrapper/fast-food-menu.component';
import { FastFoodMenuRoutingModule } from './fast-food-menu-routing.module';
import { FastFoodMenuNavigatorComponent } from './fast-food-menu-navigator/fast-food-menu-navigator.component';
import { W7LibModule } from '../../../w7-lib/w7-lib.module';
import { CommonModule } from "@angular/common";
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { DialogService, DynamicDialogModule } from "primeng/dynamicdialog";

@NgModule({
  declarations: [
    SpecialEventComponent,
    DishListComponent,
    DishCardComponent,
    DishCriteriaComponent,
    FastFoodMenuComponent,
    FastFoodMenuNavigatorComponent,
    DishDetailsComponent
  ],
  imports: [
    CommonModule,
    FastFoodMenuRoutingModule,
    W7LibModule,
    DynamicDialogModule
  ],
  providers: [DialogService]
})
export class FastFoodMenuModule {
}
