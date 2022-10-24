import { Component, Input, OnInit } from '@angular/core';
import { IBLocItem } from './model/bloc-viewer.model';

@Component({
  selector: 'app-bloc-viewer',
  templateUrl: './bloc-viewer.component.html',
  styleUrls: ['./bloc-viewer.component.scss']
})
export class BlocViewerComponent implements OnInit {

  @Input() blocItems: IBLocItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
