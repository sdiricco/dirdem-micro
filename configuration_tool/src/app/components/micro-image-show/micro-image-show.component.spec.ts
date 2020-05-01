import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroImageShowComponent } from './micro-image-show.component';

describe('MicroImageShowComponent', () => {
  let component: MicroImageShowComponent;
  let fixture: ComponentFixture<MicroImageShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroImageShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroImageShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
