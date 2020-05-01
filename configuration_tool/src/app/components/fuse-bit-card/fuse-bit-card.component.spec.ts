import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseBitCardComponent } from './fuse-bit-card.component';

describe('FuseBitCardComponent', () => {
  let component: FuseBitCardComponent;
  let fixture: ComponentFixture<FuseBitCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuseBitCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseBitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
