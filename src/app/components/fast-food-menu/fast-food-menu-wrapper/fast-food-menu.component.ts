import { Component, OnInit } from '@angular/core';
import { W7Filter } from "../../../../w7-lib/w7-util/filter";

@Component({
  selector: 'ff-menu',
  templateUrl: './fast-food-menu.component.html',
  styleUrls: ['./fast-food-menu.component.scss']
})
export class FastFoodMenuComponent implements OnInit {

  listTitle!: string;
  filter!: W7Filter;

  constructor() {
  }

  ngOnInit(): void {
  }

  onNavItemClick(event: any) {
    this.listTitle = event.label;
    this.filter = { fieldName: 'category', searchText: event.code };
  }

}
