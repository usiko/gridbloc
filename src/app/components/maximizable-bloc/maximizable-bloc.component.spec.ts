import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximizableBlocComponent } from './maximizable-bloc.component';

describe('MaximizableBlocComponent', () => {
  let component: MaximizableBlocComponent;
  let fixture: ComponentFixture<MaximizableBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaximizableBlocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaximizableBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
