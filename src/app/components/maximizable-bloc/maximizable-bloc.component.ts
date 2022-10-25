import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-maximizable-bloc',
  templateUrl: './maximizable-bloc.component.html',
  styleUrls: ['./maximizable-bloc.component.scss']
})
export class MaximizableBlocComponent implements OnInit {
  @Input() minTemplate?: TemplateRef<any>;
  @Input() maxTemplate?: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
