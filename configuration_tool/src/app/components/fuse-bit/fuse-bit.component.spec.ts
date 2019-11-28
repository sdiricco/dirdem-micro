import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseBitComponent } from './fuse-bit.component';

describe('FuseBitComponent', () => {
  let component: FuseBitComponent;
  let fixture: ComponentFixture<FuseBitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuseBitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseBitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
