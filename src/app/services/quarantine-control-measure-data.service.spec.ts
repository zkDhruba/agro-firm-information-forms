import { TestBed } from '@angular/core/testing';

import { QuarantineControlMeasureDataService } from './quarantine-control-measure-data.service';

describe('QuarantineControlMeasureDataService', () => {
  let service: QuarantineControlMeasureDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuarantineControlMeasureDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
