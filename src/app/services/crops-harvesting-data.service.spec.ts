import { TestBed } from '@angular/core/testing';

import { CropsHarvestingDataService } from './crops-harvesting-data.service';

describe('CropsHarvestingDataService', () => {
  let service: CropsHarvestingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CropsHarvestingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
