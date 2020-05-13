import { TestBed } from '@angular/core/testing';

import { MicroService } from './micro.service';

describe('DriverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MicroService = TestBed.get(MicroService);
    expect(service).toBeTruthy();
  });
});
