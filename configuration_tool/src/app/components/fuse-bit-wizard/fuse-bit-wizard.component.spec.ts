import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseBitWizardComponent } from './fuse-bit-wizard.component';

describe('FuseBitWizardComponent', () => {
  let component: FuseBitWizardComponent;
  let fixture: ComponentFixture<FuseBitWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuseBitWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseBitWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
