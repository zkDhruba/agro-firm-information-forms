import { TestBed } from '@angular/core/testing';

import { IrrigationSourceService } from './irrigation-source.service';

describe('IrrigationSourceService', () => {
  let service: IrrigationSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IrrigationSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
