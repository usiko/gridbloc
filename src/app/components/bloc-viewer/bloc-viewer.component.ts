import { Component, Input, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { Observable, Subject, Subscription, timer } from 'rxjs';
import { IBLocItem } from './model/bloc-viewer.model';

@Component({
  selector: 'app-bloc-viewer',
  templateUrl: './bloc-viewer.component.html',
  styleUrls: ['./bloc-viewer.component.scss']
})
export class BlocViewerComponent implements OnInit {

  @Input() blocItems: IBLocItem[] = [];

  masonryOptions: NgxMasonryOptions = {
    // gutter: 10,

  };

  maximisedItem?: IBLocItem;
  frontItem?: IBLocItem;

  frontItemSub?: Subscription;

  maximisedSize = {
    height: 0,
    width: 0
  };



  constructor() { }

  ngOnInit(): void {

    this.maximisedSize = {
      height: window.innerHeight - 20,
      width: window.innerWidth - 20
    };
  }

  maximiseChange(item: IBLocItem, state: boolean) {

    if (state) {
      if (this.frontItemSub) {
        this.frontItemSub.unsubscribe();
      }
      this.maximisedItem = item;
      this.frontItem = item;
    }
    else {
      if (item === this.maximisedItem) {
        if (!state) {
          this.maximisedItem = undefined;

          this.frontItemSub = timer(3000).subscribe(() => {
            if (this.frontItem && this.frontItem === item) {
              this.frontItem = undefined;
            }
          });

        }
      }
    }

  }

}
