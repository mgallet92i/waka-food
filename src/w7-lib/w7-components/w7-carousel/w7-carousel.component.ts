import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import Flickity from 'flickity';
import { W7CarouselCellInterface } from "./w7-carousel-cell.interface";
// import {debounceTime, startWith} from 'rxjs/operators';

// function getWindow(): Window {
//   return window;
// }

@Component({
  selector: 'w7-carousel',
  templateUrl: './w7-carousel.component.html',
  styleUrls: ['./w7-carousel.component.scss']
})
export class W7CarouselComponent implements OnInit, OnDestroy {

  @Input()
  data!: W7CarouselCellInterface[];

  // cf. https://flickity.metafizzy.co/options.html
  @Input()
  flickityConfig: Flickity.Options = {
    wrapAround: true,
    autoPlay: 7000,
    pauseAutoPlayOnHover: false
  };

  @Output()
  ready: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('carousel')
  carousel!: ElementRef;

  flickity: any;

  constructor(public readonly cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.flickity = new Flickity(this.carousel.nativeElement, this.flickityConfig);
      this.ready.emit(this.flickity);

      this.flickity.on('change', (count: number) => {
        this.change.emit(count);
      });

      this.flickity.on('staticClick', (event: PointerEvent,
                                       pointer: PointerEvent,
                                       cellElement: string,
                                       cellIndex: number) => {
          this.change.emit({ event, pointer, cellElement, cellIndex, });
        }
      );
    });

    // this.resize = fromEvent(getWindow(), 'resize')
    //   .pipe(startWith(1), debounceTime(500))
    //   .subscribe(() => this.changeDetection.markForCheck());
  }

  ngOnDestroy() {
    if (this.flickity) {
      this.flickity.destroy();
    }
  }
}


