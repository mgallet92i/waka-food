import { Component, OnInit } from '@angular/core';
import { W7CarouselCellInterface } from '../../../../w7-lib/w7-components/w7-carousel/w7-carousel-cell.interface';

@Component({
  selector: 'ff-special-event',
  templateUrl: './special-event.component.html',
  styleUrls: ['./special-event.component.scss']
})
export class SpecialEventComponent implements OnInit {

  // FIXME: config server side ???
  eventCells: W7CarouselCellInterface[] = [
    { imgSrc: "./assets/img/events/event1.png" },
    { imgSrc: "./assets/img/events/event2.png" },
    { imgSrc: "./assets/img/events/event3.png" }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
