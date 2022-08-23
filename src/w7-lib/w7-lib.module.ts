import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { W7NavItemComponent } from './w7-navigation/w7-nav-item/w7-nav-item.component';
import { W7CarouselComponent } from './w7-components/w7-carousel/w7-carousel.component';
import { W7SidenavComponent } from './w7-navigation/w7-sidenav/w7-sidenav.component';
import { W7ButtonComponent } from './w7-components/w7-button/w7-button.component';
import { W7FilterPipe } from "./w7-util/filter.pipe";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    W7NavItemComponent,
    W7CarouselComponent,
    W7SidenavComponent,
    W7ButtonComponent,
    W7FilterPipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    W7NavItemComponent,
    W7CarouselComponent,
    W7SidenavComponent,
    W7ButtonComponent,
    W7FilterPipe
  ]
})
export class W7LibModule {
}
