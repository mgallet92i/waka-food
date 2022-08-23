import { Component, Input, OnInit } from '@angular/core';
import { DishDtoInterface } from '../../../model/dto/dish-dto.Interface';
import dishListConfig from '../../../config/dish-list-config.json';
import { W7Filter } from "../../../../w7-lib/w7-util/filter";

@Component({
  selector: 'ff-menu-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit {

  // FIXME: config server side
  @Input()
  dishList: DishDtoInterface[] = dishListConfig as DishDtoInterface[];

  @Input()
  listTitle!: string;

  @Input()
  filter!: W7Filter;

  constructor() {
  }

  ngOnInit(): void {
  }

}
