import { TestBed } from '@angular/core/testing';

import { HarvestManagementPackingDataService } from './harvest-management-packing-data.service';

describe('HarvestManagementPackingDataService', () => {
  let service: HarvestManagementPackingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarvestManagementPackingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
