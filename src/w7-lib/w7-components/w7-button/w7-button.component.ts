import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { W7ClickEvent } from "../../w7-event/w7-click-event";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

@Component({
  selector: 'w7-button',
  templateUrl: './w7-button.component.html',
  styleUrls: ['./w7-button.component.scss']
})
export class W7ButtonComponent implements OnInit {

  @Input()
  label!: string;

  @Input()
  iconTag!: IconDefinition;

  @Output()
  onClick: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onBtnClick(event: Event) {
    const w7Event: W7ClickEvent = { originalEvent: event };
    this.onClick.emit(w7Event);
  }

}
