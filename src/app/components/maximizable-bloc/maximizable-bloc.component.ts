import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-maximizable-bloc',
  templateUrl: './maximizable-bloc.component.html',
  styleUrls: ['./maximizable-bloc.component.scss']
})
export class MaximizableBlocComponent implements OnInit {
  @Input() minTemplate?: TemplateRef<any>;
  @Input() maxTemplate?: TemplateRef<any>;

  @Output() maximiseStateChange = new EventEmitter<boolean>();

  public maximised = false;

  public maximisedSize = {
    height: 600,
    width: 600
  };
  constructor() { }

  ngOnInit(): void {
  }

  maximise() {
    this.maximised = !this.maximised;
    this.maximiseStateChange.emit(this.maximised);
  }

}
