import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroPinoutDialogComponent } from './micro-pinout-dialog.component';

describe('MicroPinoutDialogComponent', () => {
  let component: MicroPinoutDialogComponent;
  let fixture: ComponentFixture<MicroPinoutDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroPinoutDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroPinoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
