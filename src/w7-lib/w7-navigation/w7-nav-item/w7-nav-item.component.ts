import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { W7NavItemInterface } from "./w7-nav-item.interface";
import { W7ClickItemEvent } from "../../w7-event/w7-click-item-event";

@Component({
  selector: 'w7-nav-item',
  templateUrl: './w7-nav-item.component.html',
  styleUrls: ['./w7-nav-item.component.scss']
})
export class W7NavItemComponent implements OnInit {

  @Input()
  item!: W7NavItemInterface;

  @Input()
  selected: boolean = false;

  @Input()
  disabled: boolean = false;

  @Input()
  visible: boolean = true;

  @Output()
  onClick: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    if (this.item !== undefined) {
      if (this.item.selected !== undefined) {
        this.selected = this.item.selected;
      }
      if (this.item.disabled !== undefined) {
        this.disabled = this.item.disabled;
      }
    }
  }

  onItemClick(event: Event) {
    const w7Event: W7ClickItemEvent = {
      originalEvent: event,
      data: {
        label: this.item.label,
        code: this.item.code
      }
    };
    this.onClick.emit(w7Event);
    if (this.item.callback !== undefined) {
      this.item.callback();
    }
  }

  select() {
    this.selected = true;
  }

  deselect() {
    this.selected = false;
  }

  toggle() {
    this.selected = !this.selected;
  }

}
