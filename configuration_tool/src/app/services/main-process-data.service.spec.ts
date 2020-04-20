import { TestBed } from '@angular/core/testing';

import { MainProcessDataService } from './main-process-data.service';

describe('MainProcessDataService', () => {
  let service: MainProcessDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainProcessDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
