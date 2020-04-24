import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GptCfgConfigComponent } from './gpt-config.component';

describe('ConfigComponent', () => {
  let component: GptCfgConfigComponent;
  let fixture: ComponentFixture<GptCfgConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GptCfgConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GptCfgConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
