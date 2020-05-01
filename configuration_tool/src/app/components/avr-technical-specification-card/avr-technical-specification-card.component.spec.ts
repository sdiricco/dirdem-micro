import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvrTechnicalSpecificationCardComponent } from './avr-technical-specification-card.component';

describe('AvrTechnicalSpecificationCardComponent', () => {
  let component: AvrTechnicalSpecificationCardComponent;
  let fixture: ComponentFixture<AvrTechnicalSpecificationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvrTechnicalSpecificationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvrTechnicalSpecificationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
