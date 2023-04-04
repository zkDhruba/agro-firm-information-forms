import { TestBed } from '@angular/core/testing';

import { FertilizerAndFertilizingService } from './fertilizer-and-fertilizing.service';

describe('FertilizerAndFertilizingService', () => {
  let service: FertilizerAndFertilizingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FertilizerAndFertilizingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
