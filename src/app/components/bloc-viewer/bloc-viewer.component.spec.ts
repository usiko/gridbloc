import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocViewerComponent } from './bloc-viewer.component';

describe('BlocViewerComponent', () => {
  let component: BlocViewerComponent;
  let fixture: ComponentFixture<BlocViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
