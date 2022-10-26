import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-maximizable-bloc',
  templateUrl: './maximizable-bloc.component.html',
  styleUrls: ['./maximizable-bloc.component.scss']
})
export class MaximizableBlocComponent implements OnInit, AfterViewInit {
  @ViewChild('flip') flip?: ElementRef;
  @Input() minTemplate?: TemplateRef<any>;
  @Input() maxTemplate?: TemplateRef<any>;

  @Output() maximiseStateChange = new EventEmitter<boolean>();

  public maximised = false;

  private timerSub?: Subscription;

  @Input() maximisedSize = {
    height: 600,
    width: 600
  };
  public lastMinSize = {
    height: undefined,
    width: undefined
  };
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    if (this.flip) {
      this.lastMinSize.height = this.flip.nativeElement.offsetHeight;
      this.lastMinSize.width = this.flip.nativeElement.offsetWidth;
    }
  }

  maximise() {
    if (!this.maximised && this.flip) {
      this.lastMinSize.height = this.flip.nativeElement.offsetHeight;
      this.lastMinSize.width = this.flip.nativeElement.offsetWidth;
    }
    else if (this.maximised) {
      /*if (this.timerSub) {
        this.timerSub.unsubscribe();
      }
      this.timerSub = timer(5000).subscribe(() => {
        this.lastMinSize.height = undefined;
        this.lastMinSize.width = undefined;
      });*/
    }
    this.maximised = !this.maximised;
    this.maximiseStateChange.emit(this.maximised);
  }

}
