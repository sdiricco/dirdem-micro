import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroSelectorComponent } from './micro-selector.component';

describe('MicroSelectorComponent', () => {
  let component: MicroSelectorComponent;
  let fixture: ComponentFixture<MicroSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
