import { Component, Input, OnInit } from '@angular/core';
import { DishDtoInterface } from "../../../model/dto/dish-dto.Interface";
import { DialogService, DynamicDialogConfig } from "primeng/dynamicdialog";
import { DishDetailsComponent } from "../dish-details/dish-details.component";

@Component({
  selector: 'ff-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss']
})
export class DishCardComponent implements OnInit {

  // FIXME: no animation at init. Only after 1st hover

  @Input()
  data!: DishDtoInterface;

  imgSrc!: string;

  constructor(public dialogService: DialogService) {
  }

  ngOnInit(): void {
    if (this.data !== undefined && this.data.img !== undefined)
      this.imgSrc = `url(${ this.data.img })`;
  }

  openDetails() {
    this.dialogService.open(
      DishDetailsComponent,
      {
        header: this.data.label,
        data: this.data
      } as DynamicDialogConfig);
  }

}
