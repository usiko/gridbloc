import { Component, Input, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
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

  constructor() { }

  ngOnInit(): void {
  }

  maximiseChange(item: IBLocItem, state: boolean) {
    if (state) {
      this.maximisedItem = item;
    }
    else {
      if (item === this.maximisedItem) {
        if (!state) {
          this.maximisedItem = undefined;
        }
      }
    }

  }

}
