import { TestBed } from '@angular/core/testing';

import { ProductionInfoDataService } from './production-info-data.service';

describe('ProductionInfoDataService', () => {
  let service: ProductionInfoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductionInfoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
